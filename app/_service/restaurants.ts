'use client';

import { RestaurantOrderCartReq, RestaurantOrderReq } from '../_types/restaurants/restaurant';
import instance from './axios';

/**
 * /v1/admin/restaurants - 전체 매장 조회
 */
export const getRestaurants = async (page = 0, size = 20) => {
  const url = '/v1/admin/restaurants';
  const res = await instance.get(url, { params: { page, size } });

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

/**
 * /v1/admin/restaurant-orders/products - 재고발주(제품 목록 조회)
 */
export const getRestaurantOrdersProducts = async (page = 0, size = 20) => {
  const url = '/v1/admin/restaurant-orders/products';
  const res = await instance.get(url, { params: { page, size } });

  return res.data;
};

/**
 * /v1/admin/restaurant-order-carts/owner - 재고발주(장바구니 추가)
 */
export const addRestaurantOrderCarts = async (data: RestaurantOrderCartReq) => {
  const url = '/v1/admin/restaurant-order-carts/owner';
  const res = await instance.post(url, data);

  return res.data;
};

/**
 * /v1/admin/restaurant-order-carts/owner - 재고발주(장바구니 조회)
 */
export const getRestaurantOrderCarts = async (restaurantId: number, page = 0, size = 20) => {
  const url = '/v1/admin/restaurant-order-carts/owner';
  const res = await instance.get(url, { params: { restaurantId, page, size } });

  return res.data;
};

/**
 * /v1/admin/restaurant-orders/owner - 재고발주(발주정보 입력)
 */
export const postRestaurantOrders = async (restaurantId: number) => {
  const url = '/v1/admin/restaurant-orders/owner';
  const res = await instance.post(url, { restaurantId: restaurantId });

  return res.data;
};

/**
 * /v1/admin/restaurant-orders/{id}/owner - 재고발주(발주하기)
 */
export const putRestaurantOrders = async (id: number, data: RestaurantOrderReq) => {
  const url = `/v1/admin/restaurant-orders/${id}/owner`;
  const res = await instance.put(url, data);

  return res.data;
};
