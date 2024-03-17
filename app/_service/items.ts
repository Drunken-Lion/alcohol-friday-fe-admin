import axios from '@/app/_service/axios';

const ITEMS_URL = '/items';

/**
 * /v1/admin/items 전체 상품 조회
 */
export const getItems = async (page?: number, size?: number) => {
  console.log('ItemsService - getItems');

  const res = await axios.get(ITEMS_URL, { params: { page, size } });

  return res.data;
};
