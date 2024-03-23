// 'use client';

import axios from 'axios';
//import { getSession } from 'next-auth/react';

const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
  // baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  async (config) => {
    //const session = await getSession();
    // if (session) {
    //   config.headers['Authorization'] = `Bearer ${session.accessToken}`;
    // }

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
  // async (error) => {
  //   // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거
  //   // 응답 오류가 있는 작업 수행

  //   const {
  //     config,
  //     response: { status },
  //   } = error;
  //   console.log('interceptor response error ' + error);
  //   // return new Promise(() => {});
  //   return error;
  // },
);

export default instance;
