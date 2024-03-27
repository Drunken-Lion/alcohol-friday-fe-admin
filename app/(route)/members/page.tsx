'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';

import { useGetMembers } from '@/app/_hooks/useMembers';
import { dateFormat } from '@/app/_utils/common';
import Pagination from '@/app/_components/Pagination';
import Loading from '@/app/_components/Loading';

const columns = [
  {
    key: 'id',
    label: 'ID',
  },
  {
    key: 'name',
    label: 'name',
  },
  {
    key: 'nickname',
    label: 'nickname',
  },
  {
    key: 'email',
    label: 'email',
  },
  {
    key: 'role',
    label: 'role',
  },
  {
    key: 'createdAt',
    label: '생성일',
  },
  {
    key: 'deleted',
    label: '삭제여부',
  },
];

export default function MembersPage() {
  const [pageNum, setPageNum] = useState(1);
  const limitPerPage = 20;
  const { members, isLoading } = useGetMembers(pageNum - 1);
  const router = useRouter();

  if (!members) {
    return null;
  }

  const renderCell = (data: any, columnKey: any) => {
    const cellValue = data[columnKey];

    switch (columnKey) {
      case 'createdAt':
        return <div>{dateFormat(cellValue, 'YYYY-MM-DD HH:mm:ss')}</div>;
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
        <TableBody items={members?.data}>
          {(item) => (
            <TableRow
              key={item.id}
              className="cursor-grabbing hover:bg-slate-300"
              onClick={() => router.push(`/members/${item.id}`)}
            >
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Pagination
        totalCount={members?.pageInfo.count}
        pageRangeDisplayed={10}
        limitPerPage={limitPerPage}
        page={pageNum}
        setPage={setPageNum}
      />
    </div>
  );
}
