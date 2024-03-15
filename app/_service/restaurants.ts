import instance from './axios';

/**
 * /v1/admin/restaurants - 전체 매장 조회
 */
export const getRestaurants = async () => {
  const url = '/v1/admin/restaurants';
  const res = await instance.get(url);

  return res.data;
};

/**
 * /v1/admin/restaurants/{id} - 매장 상세 조회
 */
export const getRestaurantDetail = async (id: number) => {
  const url = `/v1/admin/restaurants/${id}`;
  const res = await instance.get(url);

  return res.data;
};
