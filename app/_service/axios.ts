'use client';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
  // baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const reissueToken = async () => {
  const res = await instance.post('/v1/auth/reissue-token', localStorage.getItem('refreshToken'), {
    headers: { 'content-type': 'text/plain' },
  });

  return res;
};

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken && config.url !== '/v1/auth/reissue-token') {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    console.log('interceptor response error ' + error);
    console.log(config);
    if ((status === 401 || status === 403) && config.url !== '/v1/auth/reissue-token') {
      const originRequest = config;
      const res = await reissueToken();
      if (res.status === 200) {
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('accessTokenExp', res.data.accessTokenExp);
        localStorage.setItem('refreshToken', res.data.refreshToken);
        originRequest.headers['Authorization'] = `Bearer ${res.data.accessToken}`;
        return axios(originRequest);
      } else {
        return new Promise(() => {});
      }
    }

    return new Promise(() => {});
  },
);

export default instance;
