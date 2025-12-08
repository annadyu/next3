import MovieList from "./components/MovieList";
import PaginationMovie from "./components/Pagination";

const MoviesPage = async ({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) => {
  // const page = 1;

const currentPage = Number((await searchParams).page) || 1;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?page=${currentPage}&api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const totalPages: number = data.total_pages || 1;
  const movies: Movie[] = data.results || [];

  interface Movie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path?: string;
  }


  return (
    <div>
      <MovieList movies={movies} />
      <PaginationMovie totalPages={totalPages} />
    </div>
  );
};

export default MoviesPage;
