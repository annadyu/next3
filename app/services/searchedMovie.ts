import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
}

export interface MovieSearchResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const search = async (query: string) => {
  const { data } = await axiosInstance.get<MovieSearchResponse>(
    ApiRoutes.SEARCH_MOVIE,
    { params: { query, api_key: process.env.NEXT_PUBLIC_MOVIE_API_KEY } }
  );
  return data;
};
