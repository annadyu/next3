"use client";

import { Pagination } from "antd";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  totalPages: number;
}

export default function PaginationMovie({ totalPages }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = Number(searchParams.get("page")) || 1;

  const handleChange = (page: number) => {
    router.push(`?page=${page}`);
  };

  return (
    <Pagination
      current={current}
      total={totalPages * 10}
      pageSize={10}
      onChange={handleChange}
    />
  );
}
