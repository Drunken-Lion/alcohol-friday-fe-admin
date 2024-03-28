'use client';
import useRestaurants from '@/app/_hooks/useRestaurants';
import instance from '@/app/_service/axios';
import { Button, Input } from '@nextui-org/react';
import React, { useState } from 'react';

/**
 * 재고 발주
 */
type Props = {
  restaurantId: number;
};

export default function StockOrder({ restaurantId }: Props) {
  const { useGetRestaurantOrdersProducts, useAddRestaurantOrderCarts } = useRestaurants();
  const { restaurantOrdersProducts, isLoading } = useGetRestaurantOrdersProducts();
  const [quantity, setQauntity] = useState(0);

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQauntity(Number.parseInt(e.target.value));
  };

  const handleClickOrder = async (productId: number) => {
    const data = {
      restaurantId: restaurantId,
      productId: productId,
      quantity: quantity,
    };

    useAddRestaurantOrderCarts.mutate(data);
  };

  if (!restaurantOrdersProducts) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6 px-7">
      {restaurantOrdersProducts.data.map((product, i) => (
        <React.Fragment key={product.id}>
          <div className="border rounded-md border-slate-700 border-opacity-20 p-7 w-full flex flex-row">
            <div
              className={`flex justify-center items-center bg-white rounded-lg border border-slate-700 border-opacity-20 py-4 ${!product.file && 'w-28 h-48'}`}
            >
              {product.file && (
                <img src={product.file.file[0].path} alt="" className="w-28 h-40 object-contain" />
              )}
            </div>
            <div className="flex flex-row px-4 items-center">
              <div className="flex flex-col gap-3">
                <span>
                  제품명 <b>{product.name}</b>
                </span>
                <span>
                  제조사 <b>{product.makerName}</b>
                </span>
                <span>
                  판매 단가 <b>{product.price.toLocaleString('ko-KR')}</b> 원
                </span>
                <span>
                  주문가능수량 <b>{product.quantity}</b> 개
                </span>
                <div className="flex flex-row gap-3 items-center">
                  <span>주문수량</span>
                  <Input className="w-[150px]" onChange={handleChangeQuantity} /> 개
                  <Button
                    color="success"
                    className="ml-[550px]"
                    onClick={() => handleClickOrder(product.id)}
                  >
                    장바구니 담기
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
