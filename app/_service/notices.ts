import axios from '@/app/_service/axios';

const NOTICES_URL = '/notices';

/**
 * /v1/admin/notices 공지사항 전체 조회
 */
export const getNotices = async (page?: number, size?: number) => {
  console.log('NoticesService - getNotices');

  const res = await axios.get(NOTICES_URL, { params: { page, size } });

  return res.data;
};

/**
 * /v1/admin/notices/{id} 공지사항 상세 조회
 */
export const getNotice = async (id: number) => {
  console.log('NoticesService - getNotice');

  const res = await axios.get(`${NOTICES_URL}/${id}`);

  return res.data;
};
