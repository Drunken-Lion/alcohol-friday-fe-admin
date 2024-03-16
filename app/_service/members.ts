import axios from '@/app/_service/axios';

const MEMBERS_URL = '/members';

/**
 * /v1/admin/members - 전체 회원 조회
 */
export const getMembers = async (page?: number, size?: number) => {
  console.log('MemberService - getMembers');

  const res = await axios.get(MEMBERS_URL, { params: { page, size } });

  return res.data;
};

/**
 * /v1/admin/members/{id} 회원 단건 조회
 */
export const getMember = async (id: number) => {
  console.log('MemberService - getMember');

  const res = await axios.get(`${MEMBERS_URL}/${id}`);

  return res.data;
};
