'use client';

import instance from './axios';

/**
 * /v1/admin/members - 전체 회원 조회
 */
export const getMembers = async (page = 0, size = 20) => {
  console.log('MemberService - getMembers');
  const res = await instance.get(`/v1/admin/members?page=${page}&size=${size}`);

  return res.data;
};

/**
 * /v1/admin/members/{id} 회원 단건 조회
 */
export const getMember = async (id: number) => {
  console.log('MemberService - getMember');
  const res = await instance.get(`/v1/admin/members/${id}`);

  return res.data;
};
