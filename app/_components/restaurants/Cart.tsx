import useRestaurants from '@/app/_hooks/useRestaurants';
import { Button, Input } from '@nextui-org/react';
import React from 'react';

/**
 * 장바구니
 */
type Props = {
  restaurantId: number;
};
export default function Cart({ restaurantId }: Props) {
  const { useGetRestaurantOrderCarts } = useRestaurants();
  const { restaurantOrderCarts, isLoading } = useGetRestaurantOrderCarts(restaurantId);

  if (!restaurantOrderCarts) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6 px-7">
      {restaurantOrderCarts.data.map((cart, i) => (
        <React.Fragment key={cart.id}>
          <div className="border rounded-md border-slate-700 border-opacity-20 p-7 w-full flex flex-row justify-start">
            <div
              className={`flex justify-center items-center bg-white rounded-lg border border-slate-700 border-opacity-20 py-4 ${!cart.files && 'w-28 h-48'}`}
            >
              {cart.files && (
                <img src={cart.files.file[0].path} alt="" className="w-28 h-40 object-contain" />
              )}
            </div>
            <div className="flex flex-row px-4 items-center">
              <div className="flex flex-col gap-3 w-full">
                <span>
                  제품명 <b>{cart.productName}</b>
                </span>
                <span>
                  제조사 <b>{cart.makerName}</b>
                </span>
                <span>
                  판매 단가 <b>{cart.price.toLocaleString('ko-KR')}</b> 원
                </span>
                <span>
                  주문가능수량 <b>{cart.ableQuantity}</b> 개
                </span>
              </div>
            </div>
            <div className="w-96"></div>
            <div className="flex flex-col gap-3 w-64 justify-center float-right">
              <span>
                객단가 <b>{cart.price.toLocaleString('ko-KR')}</b> 원
              </span>
              <div className="flex flex-row gap-3 items-center">
                <span>주문수량</span>
                <Input className="w-[150px]" value={cart.quantity.toString()} /> 개
              </div>
              <span>
                발주 금액 <b>{cart.totalPrice.toLocaleString('ko-KR')}</b> 원
              </span>
              <Button
                color="danger"
                // className="ml-[550px]"
                // onClick={() => handleClickOrder(product.id)}
              >
                삭제
              </Button>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
