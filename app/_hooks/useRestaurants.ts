import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
  AllRestaurantOrderCartsResponse,
  AllRestaurantOrderProductResponse,
  AllRestaurantResponse,
  RestaurantDetail,
  RestaurantOrderCartReq,
} from '../_types/restaurants/restaurant';
import {
  addRestaurantOrderCarts,
  getRestaurantDetail,
  getRestaurantOrderCarts,
  getRestaurantOrdersProducts,
  getRestaurants,
} from '../_service/restaurants';

export default function useRestaurants() {
  const queryClient = useQueryClient();

  const useGetRestaurants = (page = 0, size = 20) => {
    const { data: restaurants, isLoading } = useQuery<AllRestaurantResponse, AxiosError>({
      queryKey: ['get-members', page],
      queryFn: () => getRestaurants(page, size),
      placeholderData: keepPreviousData,
    });

    return { restaurants, isLoading };
  };

  const useGetRestaurantDetail = (id: number) => {
    const { data: restaurant, isLoading } = useQuery<RestaurantDetail, AxiosError>({
      queryKey: ['get-member', id],
      queryFn: () => getRestaurantDetail(id),
      placeholderData: keepPreviousData,
    });

    return { restaurant, isLoading };
  };

  const useGetRestaurantOrdersProducts = (page = 0, size = 20) => {
    const { data: restaurantOrdersProducts, isLoading } = useQuery<
      AllRestaurantOrderProductResponse,
      AxiosError
    >({
      queryKey: ['get-restaurantOrdersProducts', page],
      queryFn: () => getRestaurantOrdersProducts(page, size),
      placeholderData: keepPreviousData,
    });

    return { restaurantOrdersProducts, isLoading };
  };

  const useAddRestaurantOrderCarts = useMutation({
    mutationFn: (data: RestaurantOrderCartReq) => {
      return addRestaurantOrderCarts(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-restaurantOrdersProducts', 0] });
    },
  });

  const useGetRestaurantOrderCarts = (restaurantId: number, page = 0, size = 20) => {
    const { data: restaurantOrderCarts, isLoading } = useQuery<
      AllRestaurantOrderCartsResponse,
      AxiosError
    >({
      queryKey: ['get-restaurantOrderCarts', restaurantId],
      queryFn: () => getRestaurantOrderCarts(restaurantId, page, size),
      placeholderData: keepPreviousData,
    });

    return { restaurantOrderCarts, isLoading };
  };

  return {
    useGetRestaurants,
    useGetRestaurantDetail,
    useGetRestaurantOrdersProducts,
    useAddRestaurantOrderCarts,
    useGetRestaurantOrderCarts,
  };
}
