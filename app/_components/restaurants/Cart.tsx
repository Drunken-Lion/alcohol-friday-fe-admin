import useRestaurants from '@/app/_hooks/useRestaurants';
import { postRestaurantOrders, putRestaurantOrders } from '@/app/_service/restaurants';
import { RestaurantOrderInfoRes } from '@/app/_types/restaurants/restaurant';
import { Button, Input } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

/**
 * 장바구니
 */
type Props = {
  restaurantId: number;
  setMenu: (menu: string) => void;
};
export default function Cart({ restaurantId, setMenu }: Props) {
  const { useGetRestaurantOrderCarts } = useRestaurants();
  const { restaurantOrderCarts } = useGetRestaurantOrderCarts(restaurantId);

  const [orderInfo, setOrderInfo] = useState<RestaurantOrderInfoRes>();

  const handleClickPostOrder = async () => {
    const res = await postRestaurantOrders(restaurantId);

    setOrderInfo(res);
    setRecipient(res.member.name);
  };

  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState(0);
  const [recipient, setRecipient] = useState('');

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(Number.parseInt(e.target.value));
  };

  const handleClickPutOrder = async (id: number) => {
    if (window.confirm('발주 하시겠습니까?')) {
      const data = {
        description: description,
        phone: phone,
        recipient: recipient,
      };
      await putRestaurantOrders(id, data);

      alert('발주 되었습니다.');
      setMenu('발주 내역');
    }
  };

  if (!restaurantOrderCarts) {
    return null;
  }

  if (orderInfo != null) {
    return (
      <div className="flex flex-col gap-6 px-7">
        {orderInfo.details.map((detail, i) => (
          <div
            key={detail.id}
            className="border rounded-md border-slate-700 border-opacity-20 p-7 w-full flex flex-row justify-between"
          >
            <div className="flex flex-row gap-4 items-center">
              {detail.file ? (
                <img
                  src={detail.file.file[0].path}
                  alt=""
                  className="w-28 h-40 rounded-lg object-cover"
                />
              ) : (
                <div className="w-28 h-40 flex justify-center items-center bg-gray-200 rounded-lg border border-slate-700 border-opacity-20">
                  이미지 없음
                </div>
              )}
              <div className="flex flex-col gap-5">
                <div className="flex flex-row">
                  <span>제품명: </span>
                  <span className="font-semibold">{detail.name}</span>
                </div>
                <div className="flex flex-row">
                  <span>제조사: </span>
                  <span className="font-semibold">{detail.makerName}</span>
                </div>
                <div className="flex flex-row">
                  <span>판매 단가: </span>
                  <span className="font-semibold">{detail.price.toLocaleString('ko-KR')} 원</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-5 justify-center">
              <div className="flex flex-row">
                <span>객단가: </span>
                <span className="font-semibold">{detail.price.toLocaleString('ko-KR')} 원</span>
              </div>
              <div className="flex flex-row">
                <span>주문수량: </span>
                <span className="font-semibold">{detail.orderQuantity} 개</span>
              </div>
              <div className="flex flex-row">
                <span>발주 금액: </span>
                <span className="font-semibold">
                  {detail.totalPrice.toLocaleString('ko-KR')} 원
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex flex-col mb-4 md:mb-0">
              <span className="font-semibold">사업자명:</span>
              <span>{orderInfo.businessName}</span>
              <span className="font-semibold">배송지:</span>
              <span>{orderInfo.address}</span>
            </div>
            <div className="flex flex-col">
              <label htmlFor="deliveryNote" className="font-semibold mb-1">
                배송 주의 사항:
              </label>
              <input
                type="text"
                id="deliveryNote"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                onChange={handleChangeDescription}
              />
              <label htmlFor="contact" className="font-semibold mt-4 mb-1">
                연락처:
              </label>
              <input
                type="text"
                id="contact"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                onChange={handleChangePhone}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="font-semibold text-xl">총 금액:</span>
              <span className="font-semibold text-xl">
                {orderInfo.totalPrice.toLocaleString('ko-KR')} 원
              </span>
            </div>
            <Button
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
              onClick={() => handleClickPutOrder(orderInfo.id)}
            >
              발주
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 px-7">
      {restaurantOrderCarts.data.map((cart, i) => (
        <React.Fragment key={cart.id}>
          <div className="border rounded-md border-slate-700 border-opacity-20 p-7 w-full flex flex-row justify-between">
            <div className="flex flex-row gap-4 items-center">
              {cart.files ? (
                <img
                  src={cart.files.file[0].path}
                  alt=""
                  className="w-28 h-40 rounded-lg object-cover"
                />
              ) : (
                <div className="w-28 h-40 flex justify-center items-center bg-gray-200 rounded-lg border border-slate-700 border-opacity-20">
                  이미지 없음
                </div>
              )}
              <div className="flex flex-col gap-5">
                <div className="flex flex-row">
                  <span>
                    제품명 <b>{cart.productName}</b>
                  </span>
                </div>
                <div className="flex flex-row">
                  <span>
                    제조사 <b>{cart.makerName}</b>
                  </span>
                </div>
                <div className="flex flex-row">
                  <span>
                    판매 단가 <b>{cart.price.toLocaleString('ko-KR')}</b> 원
                  </span>
                </div>
                <div className="flex flex-row">
                  <span>
                    주문가능수량 <b>{cart.ableQuantity}</b> 개
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-end justify-center">
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
      <div className="flex justify-center">
        <Button color="success" size="lg" onClick={handleClickPostOrder}>
          발주정보 입력하기
        </Button>
      </div>
    </div>
  );
}
