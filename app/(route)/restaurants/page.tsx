'use client';

import Loading from '@/app/_components/Loading';
import Pagination from '@/app/_components/Pagination';
import useRestaurants from '@/app/_hooks/useRestaurants';
import { dateFormat } from '@/app/_utils/common';
import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const columns = [
  {
    key: 'id',
    label: 'NO',
  },
  {
    key: 'name',
    label: '가게 상호명',
  },
  {
    key: 'category',
    label: '카테고리',
  },
  {
    key: 'memberNickname',
    label: '레스토랑 주인',
  },
  {
    key: 'createdAt',
    label: '등록일',
  },
  {
    key: 'businessName',
    label: '사업자명',
  },
  {
    key: 'businessNumber',
    label: '사업자번호',
  },
];

export default function RestaurantsPage() {
  const [pageNum, setPageNum] = useState(1);
  const limitPerPage = 20;
  const { useGetRestaurants } = useRestaurants();
  const { restaurants, isLoading } = useGetRestaurants(pageNum - 1, limitPerPage);
  const router = useRouter();

  if (!restaurants) {
    return null;
  }

  const renderCell = (data: any, columnKey: any) => {
    const cellValue = data[columnKey];

    switch (columnKey) {
      case 'createdAt':
        return <div>{dateFormat(cellValue, 'YYYY-MM-DD')}</div>;
      case 'deleted':
        return (
          <Chip
            className="capitalize"
            color={cellValue ? 'danger' : 'success'}
            size="sm"
            variant="flat"
          >
            {cellValue ? 'Deleted' : 'Active'}
          </Chip>
        );
      default:
        return cellValue;
    }
  };

  return (
    <div className="m-auto w-9/12 h-full py-8">
      {isLoading && <Loading />}
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={restaurants?.data}>
          {(item) => (
            <TableRow
              key={item.id}
              className="cursor-grabbing hover:bg-slate-300"
              onClick={() => router.push(`/restaurants/${item.id}`)}
            >
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Pagination
        totalCount={restaurants?.pageInfo.count}
        pageRangeDisplayed={10}
        limitPerPage={limitPerPage}
        page={pageNum}
        setPage={setPageNum}
      />
    </div>
  );
}
