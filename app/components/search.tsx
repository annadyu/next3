"use client";
// import Link from "next/link";
import React from "react";
import { Input } from "antd";
import { Flex, Spin, Pagination } from "antd";
import { useClickAway } from "react-use";
import { search as searchMovies } from "../services/searchedMovie";

interface Props {
  className?: string;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [noResult, setNoResult] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const [products, setProducts] = React.useState<Movie[]>([]);
  const ref = React.useRef<HTMLDivElement | null>(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery("");
    setProducts([]);
  };

  React.useEffect(() => {
    if (!searchQuery.trim()) {
      setProducts([]);
      return;
    }

    const handler = setTimeout(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const data = await searchMovies(searchQuery);
          setProducts(data.results);
          if (data.results.length === 0) {
            setNoResult(true);
          }
        } catch (err) {
          console.error("Search error:", err);
          setProducts([]);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, 500);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  const onSearch = (
    value: string,
    event?: React.SyntheticEvent | undefined
  ) => {
    console.log("onSearch value:", value, "event:", event);
    setSearchQuery(value);
    setFocused(false);
  };

  const { Search } = Input;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        marginBottom: "50px",
      }}
    >
      <Search
        placeholder="input search text"
        value={searchQuery}
        onChange={(e) => setSearchQuery((e.target as HTMLInputElement).value)}
        onSearch={onSearch}
        enterButton
        onFocus={() => setFocused(true)}
      />

      {focused && products.length > 0 && (
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            background: "white",
            width: "100%",
            border: "1px solid #eee",
            marginTop: 8,
            padding: 8,
          }}
        >
          {loading ? (
            <div>
              {" "}
              <Flex vertical>
                <Spin size="large" tip="Loading..."></Spin>
              </Flex>
            </div>
          ) : noResult ? (
            <div style={{ padding: 10, textAlign: "center" }}>
              No result found! Please try again!
            </div>
          ) : (
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {products.map((movie) => (
                <li
                  key={movie.id}
                  onClick={onClickItem}
                  style={{ cursor: "pointer", padding: 6 }}
                >
                  {movie.title} ({movie.release_date?.slice(0, 4) ?? "—"})
                </li>
              ))}
            </ul>
          )}
          <Pagination defaultCurrent={1} total={50} />
        </div>
      )}
    </div>
  );
};
