import { RestaurantDetailProps } from '@/app/_types/restaurants/detailProps';
import { Input } from '@nextui-org/react';
import React from 'react';

/**
 * 가게 재고 관리
 */
export default function Stock({ restaurant }: RestaurantDetailProps) {
  return (
    <div className="flex flex-row justify-center gap-14 px-7">
      {restaurant.stockProductInfos.map((stockProducInfo, i) => (
        <React.Fragment key={stockProducInfo.stockProductId}>
          <div className="border rounded-md border-slate-700 border-opacity-20 p-7 w-full flex flex-row">
            <div
              className={`flex justify-center items-center bg-white rounded-lg border border-slate-700 border-opacity-20 py-4 ${!stockProducInfo.stockProductFile && 'w-28 h-48'}`}
            >
              {stockProducInfo.stockProductFile && (
                <img
                  src={stockProducInfo.stockProductFile.file[0].path}
                  alt=""
                  className="w-28 h-40 object-contain"
                />
              )}
            </div>
            <div className="flex flex-row px-4 items-center">
              <div className="flex flex-col gap-3">
                <span>제품명 {stockProducInfo.stockProductName}</span>
                <Input label="판매 단가" labelPlacement="outside-left" value="" />
                <Input
                  label="재고"
                  labelPlacement="outside-left"
                  value={stockProducInfo.stockQuantity.toString()}
                />
              </div>
            </div>
          </div>
          {/* {(i + 1) % 2 === 0 && <div className="w-full" />} */}
          {(i + 1) % 2 === 0 && <br />}
        </React.Fragment>
      ))}
    </div>
  );
}
