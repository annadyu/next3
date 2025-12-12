"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Pagination } from "antd";

interface PaginationInterfaces {
  totalPages: number;
  // currentPage: number
}

export default function PaginationMovie({ totalPages }: PaginationInterfaces) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const updatePage = (page: number) => {
    router.replace(createPageURL(page));
  };

  return (
    <div className="flex justify-center mt-3">
      <Pagination
        current={currentPage}
        total={totalPages * 20}
        pageSize={20}
        onChange={updatePage}
      />
    </div>
  );
}

// "use client";

// import { Pagination } from "antd";
// import { useRouter, useSearchParams } from "next/navigation";

// interface Props {
//   totalPages: number;
// }

// export default function PaginationMovie({ totalPages }: Props) {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const current = Number(searchParams.get("page")) || 1;

//   const handleChange = (page: number) => {

//     const params = new URLSearchParams(window.location.search);

//     params.set("page", String(page));
//     params.toString();
//     router.push(`?${params.toString()}`);
//   };

//   return (
//     <Pagination
//       current={current}
//       total={totalPages * 20}
//       pageSize={20}
//       onChange={handleChange}
//     />
//   );
// }
