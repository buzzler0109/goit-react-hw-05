import axios from "axios";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDYzNDgzODRlMjNiYWM2MDVlMjM1ZTJhYjU2MGVhMyIsInN1YiI6IjY2MWVmNmE2NmQ5ZmU4MDE0YTVmZDA5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o4erF8VFRsxkjCKS9OA93nGD6x-V3jXx9bJGf9gpuR4";

const BASE_URL = "https://api.themoviedb.org/";

const options = {
  headers: {
    Authorization: "Bearer " + API_TOKEN,
  },
};

export const fetchMoviesTrending = async () => {
  const url = BASE_URL + "3/trending/movie/day";
  const response = await axios.get(url, options);
  return response;
};

export const fetchMoviesSearch = async (query) => {
  const url = BASE_URL + `3/search/movie?query=${query}`;
  const response = await axios.get(url, options);
  return response;
};

export const fetchMoviesDetails = async (movieId) => {
  const url = BASE_URL + `3/movie/${movieId}`;
  const response = await axios.get(url, options);
  return response;
};

export const fetchMoviesCredits = async (movieId) => {
  const url = BASE_URL + `3/movie/${movieId}/credits`;
  const response = await axios.get(url, options);
  return response;
};

export const fetchMoviesReviews = async (movieId) => {
  const url = BASE_URL + `3/movie/${movieId}/reviews`;
  const response = await axios.get(url, options);
  return response;
};
