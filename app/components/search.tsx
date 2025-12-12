"use client";

import debounce from "lodash/debounce";
import { Pagination } from "antd";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search({ query }: { query: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = debounce((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className="relative flex flex-1 shrink-0 mb-5 mt-2.5 pl-2.5 pr-2.5">
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-1 placeholder:text-gray-500 "
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

// "use client";

// import React from "react";
// import { Input, Flex, Spin, Pagination } from "antd";
// import { useRouter, useSearchParams } from "next/navigation";
// import debounce from "lodash/debounce";

// interface Props {
//   className?: string;
// }

// export default function SearchInput() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const query = searchParams.get("query") || "";

//   const debouncedSearch = React.useMemo(
//     () =>
//       debounce((value: string) => {
//         const params = new URLSearchParams(window.location.search);

//         params.set("query", value);
//         // params.set("page", "1"); // сбрасываем на первую страницу
//         router.push(`?${params.toString()}`);
//       }, 500),
//     []
//   );

//   const { Search } = Input;

//   return (
//     <div>
//       <Search
//         placeholder="Search movies..."
//         value={query}
//         onChange={(e) => debouncedSearch(e.target.value)}
//         enterButton
//       />
//     </div>
//   );
// }
