import { fetchMovies } from "./fetch-api";
import Search from "./components/search";
import PaginationMovie from "./components/Pagination";
import MovieList from "./components/MovieList";

export default async function MoviesPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const { data, totalPages } = await fetchMovies(query, currentPage);

  return (
    <div>
      <Search />
      <MovieList movies={data} />
      <PaginationMovie totalPages={totalPages} />
    </div>
  );
}


// import MovieList from "./components/MovieList";
// import PaginationMovie from "./components/Pagination";
// import SearchInput from "./components/search";
// import { Movie } from "./services/interfaces";

// export default async function MoviesPage(props: {
//   searchParams?: Promise<{
//     query?: string;
//     page?: string;
//   }>;
// }) {
//   const searchParams = await props.searchParams;
//   const query = searchParams?.query || "";
//   const currentPage = Number(searchParams?.page) || 1;
//   //  const pageParam = searchParams.page;
//   // const currentPage =
//   //   Number(Array.isArray(pageParam) ? pageParam[0] : pageParam) || 1;

//   // // const currentPage = Number((await searchParams).page) || 1;

//   // const queryParam = searchParams.query;
//   // const query =
//   //   Array.isArray(queryParam) ? queryParam[0] : queryParam || "";

//   let movies: Movie[] = [];
//   let totalPages = 1;

//   if (query) {
//     const res = await fetch(
//       `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
//     );
//     const data = await res.json();
//     movies = data.results || [];
//     totalPages = data.total_pages || 1;
//   } else {
//     const res = await fetch(
//       `https://api.themoviedb.org/3/movie/popular?page=${currentPage}&api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
//     );
//     const data = await res.json();
//     movies = data.results || [];
//     totalPages = data.total_pages || 1;
//   }

//   return (
//     <div>
//       <SearchInput />
//       <MovieList movies={movies} />
//       <PaginationMovie totalPages={totalPages} />
//     </div>
//   );
// }

