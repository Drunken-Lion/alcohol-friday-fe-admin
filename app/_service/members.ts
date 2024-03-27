'use client';

import instance from './axios';

/**
 * /v1/admin/members - 전체 회원 조회
 */
export const getMembers = async (page = 0, size = 20) => {
  const url = '/v1/admin/members';
  const res = await instance.get(url, { params: { page, size } });

  return res.data;
};

/**
 * /v1/admin/members/{id} 회원 단건 조회
 */
export const getMemberDetail = async (id: number) => {
  const url = `/v1/admin/members/${id}`;
  const res = await instance.get(url);

  return res.data;
};
