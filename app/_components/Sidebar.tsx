'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Detail from './restaurants/Detail';
import { RestaurantDetail } from '../_types/restaurants/restaurant';
import Stock from './restaurants/Stock';
import StockOrder from './restaurants/StockOrder';
import Cart from './restaurants/Cart';
import Order from './restaurants/Order';
import Refund from './restaurants/Refund';
import { RestaurantDetailProps } from '../_types/restaurants/detailProps';

export default function SideNavbar({ restaurant }: RestaurantDetailProps) {
  const [menuToggle, setMenuToggle] = useState(true);
  const [menu, setMenu] = useState('가게 정보 관리');

  const handleClickMenu = (menu: string) => {
    setMenu(menu);
  };

  return (
    <div>
      {/* 사이드 바 메인 */}
      <main className="flex bg-gray-100">
        {/* SideBar */}
        <aside className={` ${menuToggle ? 'hidden md:block' : 'hidden'} w-64 bg-blue-400`}>
          <nav className="block text-white text-base font-normal pt-3">
            <Link
              href=""
              className={`flex items-center text-white ${menu === '가게 정보 관리' ? 'bg-blue-500 opacity-100' : 'opacity-75 hover:opacity-100'} py-4 pl-6`}
              onClick={() => handleClickMenu('가게 정보 관리')}
            >
              가게 정보 관리
            </Link>
            <Link
              href=""
              className={`flex items-center text-white ${menu === '가게 재고 관리' ? 'bg-blue-500 opacity-100' : 'opacity-75 hover:opacity-100'} py-4 pl-6`}
              onClick={() => handleClickMenu('가게 재고 관리')}
            >
              가게 재고 관리
            </Link>
            <Link
              href=""
              className={`flex items-center text-white ${menu === '재고 발주' ? 'bg-blue-500 opacity-100' : 'opacity-75 hover:opacity-100'} py-4 pl-6`}
              onClick={() => handleClickMenu('재고 발주')}
            >
              재고 발주
            </Link>
            <Link
              href=""
              className={`flex items-center text-white ${menu === '장바구니' ? 'bg-blue-500 opacity-100' : 'opacity-75 hover:opacity-100'} py-4 pl-6`}
              onClick={() => handleClickMenu('장바구니')}
            >
              장바구니
            </Link>
            <Link
              href=""
              className={`flex items-center text-white ${menu === '발주 내역' ? 'bg-blue-500 opacity-100' : 'opacity-75 hover:opacity-100'} py-4 pl-6`}
              onClick={() => handleClickMenu('발주 내역')}
            >
              발주 내역
            </Link>
            <Link
              href=""
              className={`flex items-center text-white ${menu === '환불 내역' ? 'bg-blue-500 opacity-100' : 'opacity-75 hover:opacity-100'} py-4 pl-6`}
              onClick={() => handleClickMenu('환불 내역')}
            >
              환불 내역
            </Link>
          </nav>
        </aside>

        {/* Mobile Header & Nav */}
        <div className="w-full h-screen flex flex-col overflow-y-hidden">
          {/* props.children position here */}
          {/* <slot>{props.children}</slot> */}
          <div className="m-auto w-3/4 h-auto py-6 rounded-lg my-8 bg-content1 overflow-auto shadow-small">
            {menu === '가게 정보 관리' && <Detail restaurant={restaurant} />}
            {menu === '가게 재고 관리' && <Stock restaurant={restaurant} />}
            {menu === '재고 발주' && <StockOrder restaurant={restaurant} />}
            {menu === '장바구니' && <Cart restaurant={restaurant} />}
            {menu === '발주 내역' && <Order restaurant={restaurant} />}
            {menu === '환불 내역' && <Refund restaurant={restaurant} />}
          </div>
        </div>
      </main>
    </div>
  );
}
