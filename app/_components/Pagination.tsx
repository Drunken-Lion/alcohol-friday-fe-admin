'use client';

import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

interface PaginationProps {
  totalCount: number | 0;
  limitPerPage: number | 10;
  pageRangeDisplayed: number | 10;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({
  totalCount,
  limitPerPage,
  pageRangeDisplayed,
  page,
  setPage,
}: PaginationProps) {
  const totalPages = Math.ceil(totalCount / limitPerPage);
  const [pageGroup, setPageGroup] = useState<number>(Math.ceil(page / pageRangeDisplayed));
  let firstNum = pageGroup * pageRangeDisplayed - (pageRangeDisplayed - 1);
  let lastNum = pageGroup * pageRangeDisplayed;

  if (lastNum > totalPages) {
    lastNum = totalPages;
  }

  useEffect(() => {
    setPageGroup(Math.ceil(page / pageRangeDisplayed));
  }, [page]);

  return (
    <div className="flex flex-row justify-center items-center py-[40px]">
      <Button
        size="sm"
        className="bg-white rounded-[36px] border border-zinc-300 mr-7"
        onClick={() => {
          if (page > 1) {
            setPage((prevPage) => {
              const page = prevPage - 1;
              setPageGroup(Math.ceil(page / pageRangeDisplayed));

              return page;
            });
          }
        }}
        disabled={page === 1 || totalPages === 0}
      >
        {'<'}
      </Button>
      <div className="flex gap-3">
        <Button
          size="sm"
          className={`${page === firstNum ? 'bg-slate-700 border-slate-700 text-white' : 'bg-white border-zinc-300 text-zinc-800'} rounded-[36px] border`}
          onClick={() => {
            setPage(firstNum);
          }}
          disabled={page === firstNum}
        >
          {firstNum}
        </Button>
        {Array(pageRangeDisplayed - 1)
          .fill(null)
          .map((_, i) => {
            if (i >= lastNum - firstNum) {
              return null;
            }
            return (
              <Button
                key={i}
                size="sm"
                className={`${page === firstNum + 1 + i ? 'bg-slate-700 border-slate-700 text-white' : 'bg-white border-zinc-300 text-zinc-800'} rounded-[36px] border`}
                onClick={() => {
                  setPage(() => {
                    const page = firstNum + 1 + i;
                    return page;
                  });
                }}
                disabled={page === firstNum + 1 + i}
              >
                {firstNum + 1 + i}
              </Button>
            );
          })}
      </div>
      <Button
        size="sm"
        className="bg-white rounded-[36px] border border-zinc-300 ml-7 text-sm"
        onClick={() => {
          if (page < totalPages) {
            setPage((prevPage) => {
              const page = prevPage + 1;
              setPageGroup(Math.ceil(page / pageRangeDisplayed));
              return page;
            });
          }
        }}
        disabled={page === totalPages || totalPages === 0}
      >
        {'>'}
      </Button>
    </div>
  );
}
