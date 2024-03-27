import { RestaurantDetailProps } from '@/app/_types/restaurants/detailProps';
import { RestaurantDetail } from '@/app/_types/restaurants/restaurant';
import { Input } from '@nextui-org/react';
import React from 'react';

export default function Detail({ restaurant }: RestaurantDetailProps) {
  return (
    <div className="flex flex-col gap-[10px] pl-6">
      <Input type="text" label="가게이름" labelPlacement="outside-left" value={restaurant.name} />
      <Input
        type="text"
        label="카테고리"
        labelPlacement="outside-left"
        value={restaurant.category}
      />
      <Input
        type="text"
        label="가게주소"
        labelPlacement="outside-left"
        value={restaurant.address}
        disabled
      />
      <Input
        type="text"
        label="연락처"
        labelPlacement="outside-left"
        value={`0${restaurant.contact.toString()}`}
      />
      <Input
        type="text"
        label="메뉴"
        labelPlacement="outside-left"
        value={JSON.stringify(restaurant.menu)}
        readOnly
      />
      <Input
        type="text"
        label="영업시간"
        labelPlacement="outside-left"
        value={JSON.stringify(restaurant.time)}
        readOnly
      />
      <Input
        type="text"
        label="편의시설"
        labelPlacement="outside-left"
        value={JSON.stringify(restaurant.provision)}
        readOnly
      />
      <Input
        type="text"
        label="사업자명"
        labelPlacement="outside-left"
        value={restaurant.businessName}
        disabled
      />
      <Input
        type="text"
        label="사업자번호"
        labelPlacement="outside-left"
        value={restaurant.businessNumber}
        disabled
      />
    </div>
  );
}
