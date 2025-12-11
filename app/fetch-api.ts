export async function fetchMovies(query: string, page: number) {
  const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY;

  const url = query
    ? `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}&api_key=${API_KEY}`
    : `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${API_KEY}`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await res.json();
  return {
    data: data.results || [],
    totalPages: data.total_pages || 1,
  };
}
