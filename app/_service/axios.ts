'use client';
import axios from 'axios';

const instance = axios.create({
  // baseURL: process.env.REACT_APP_API_BASEURL,
  baseURL: 'http://localhost:3001',
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

instance.interceptors.request.use(
  (config) => {
    //const session = await getSession();
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken && config.url !== '/v1/auth/reissue-token') {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    // if (config.url === '/reissue-token') {
    //   token = localStorage.getItem('refreshToken');
    // } else {
    // token = localStorage.getItem('accessToken');
    // }

    // config.headers['Authorization'] = `Bearer ${accessToken}`;

    return config;
  },
  // (error) => {
  //   console.log('interceptor request error ' + error);
  //   return error;
  // },
);

instance.interceptors.response.use(
  (response) => {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거
    // 응답 데이터가 있는 작업 수행
    // http status는 200이지만 서버에서 오류 응답을 보냈을 때
    // if (response.data.status === 'error') {
    //     return Promise.reject(response);
    // }
    // console.log(response);

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
