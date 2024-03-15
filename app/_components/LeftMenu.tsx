'use client';
import Link from 'next/link';
import React, { useState } from 'react';

interface LeftMenuProps {}

export default function LeftMenu({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarToggle, setSidebarToggle] = useState<boolean>(false);

  const handleSnbMenuCollapse = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const element = event.currentTarget;
    if (sidebarToggle) {
      if (element.classList.contains('collapsed-y')) {
        element.classList.remove('collapsed-y');
        element.classList.add('collapsed-n');
        element.nextElementSibling?.classList.add('show');
      } else {
        element.classList.remove('collapsed-n');
        element.classList.add('collapsed-y');
        element.nextElementSibling?.classList.remove('show');
      }
    } else {
      if (element.nextElementSibling?.classList.contains('show')) {
        element.nextElementSibling.classList.remove('show');
      } else {
        element.nextElementSibling?.classList.add('show');
      }
    }
  };

  const handleSidebarToggle = () => {
    const collapsed = document.querySelectorAll('.collapsed-n');
    if (collapsed) {
      console.log(collapsed);
      collapsed.forEach((element) => {
        element.classList.remove('collapsed-n');
        element.classList.add('collapsed-y');
        element.nextElementSibling?.classList.remove('show');
      });
    }

    setSidebarToggle(!sidebarToggle);
  };

  return (
    <div id="page-top" className={sidebarToggle ? 'sidebar-toggled' : ''}>
      <ul
        className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${
          sidebarToggle ? 'toggled' : ''
        }`}
      >
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            Alcohol-Friday<i className="bi bi-8-square"></i>
            {/* <sup>2</sup> */}
          </div>
        </Link>

        <hr className="sidebar-divider my-0" />

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">제품</div>

        <li className="nav-item">
          <a
            className="nav-link collapsed-y"
            data-toggle="collapse"
            onClick={(e) => handleSnbMenuCollapse(e)}
          >
            <i className="fas fa-fw fa-table"></i>
            <span>제품 관리</span>
          </a>
          <div className="collapse">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">제품 관리</h6>
              <Link className="collapse-item" href="/hi">
                제품 목록
              </Link>
              <Link className="collapse-item" href="/hi2">
                제품 등록
              </Link>
            </div>
          </div>
        </li>

        <div className="sidebar-heading">상품</div>

        <li className="nav-item">
          <a
            className="nav-link collapsed-y"
            data-toggle="collapse"
            onClick={(e) => handleSnbMenuCollapse(e)}
          >
            <span>상품 관리</span>
          </a>
          <div className="collapse">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">상품 관리</h6>
              <a className="collapse-item" href="utilities-color.html">
                상품 목록
              </a>
              <a className="collapse-item" href="utilities-border.html">
                상품 등록
              </a>
            </div>
          </div>
        </li>

        <div className="sidebar-heading">제조사</div>

        <li className="nav-item">
          <a
            className="nav-link collapsed-y"
            data-toggle="collapse"
            onClick={(e) => handleSnbMenuCollapse(e)}
          >
            <span>제조사 관리</span>
          </a>
          <div className="collapse">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">제조사 관리</h6>
              <a className="collapse-item" href="utilities-color.html">
                제조사 목록
              </a>
              <a className="collapse-item" href="utilities-border.html">
                제조사 등록
              </a>
            </div>
          </div>
        </li>

        <div className="sidebar-heading">카테고리</div>

        <li className="nav-item">
          <a
            className="nav-link collapsed-y"
            data-toggle="collapse"
            onClick={(e) => handleSnbMenuCollapse(e)}
          >
            <span>카테고리 관리</span>
          </a>
          <div className="collapse">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">카테고리 관리</h6>
              <a className="collapse-item" href="utilities-color.html">
                카테고리 목록
              </a>
              <a className="collapse-item" href="utilities-border.html">
                카테고리 등록
              </a>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
            onClick={handleSidebarToggle}
          ></button>
        </div>
      </ul>
    </div>
  );
}
