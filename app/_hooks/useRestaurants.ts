import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { AllRestaurantResponse, RestaurantDetail } from '../_types/restaurants/restaurant';
import { getRestaurantDetail, getRestaurants } from '../_service/restaurants';

export const useGetRestaurants = (page = 0, size = 20) => {
  const { data: restaurants, isLoading } = useQuery<AllRestaurantResponse, AxiosError>({
    queryKey: ['get-members', page],
    queryFn: () => getRestaurants(page, size),
    placeholderData: keepPreviousData,
  });

  return { restaurants, isLoading };
};

export const useGetRestaurantDetail = (id: number) => {
  const { data: restaurant, isLoading } = useQuery<RestaurantDetail, AxiosError>({
    queryKey: ['get-member', id],
    queryFn: () => getRestaurantDetail(id),
    placeholderData: keepPreviousData,
  });

  return { restaurant, isLoading };
};
