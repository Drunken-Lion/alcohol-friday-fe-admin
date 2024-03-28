'use client';

import React from 'react';

import useRestaurants from '@/app/_hooks/useRestaurants';
import SideNavbar from '@/app/_components/Sidebar';

export default function RestaurantDetailPage({ params: { id } }: { params: { id: number } }) {
  const { useGetRestaurantDetail } = useRestaurants();
  const { restaurant, isLoading } = useGetRestaurantDetail(id);

  if (!restaurant) {
    return null;
  }
  return (
    <div className="w-full p-0">
      <SideNavbar restaurant={restaurant} />
    </div>
  );
}
