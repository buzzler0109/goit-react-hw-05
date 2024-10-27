import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMoviesSearch } from "../../api/movies";

import MovieList from "../../components/movie_list/MovieList";
import FormSubmit from "../../components/form_submit/FormSubmit";

import { Loader } from "../../components/loader/Loader";

import css from "./MoviesPage.module.scss";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieSearch, setMovieSearch] = useState([]);
  const [loader, setLoader] = useState(false);

  const moviesName = searchParams.get("query") ?? "";

  useEffect(() => {
    async function fetchResponse() {
      try {
        setLoader(true);
        const res = await fetchMoviesSearch(moviesName);
        const dataResults = res.data.results;
        setMovieSearch(dataResults);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchResponse();
  }, [moviesName]);

  return (
    <section className={css.movies}>
      {loader && <Loader />}
      <FormSubmit setSearchParams={setSearchParams} />
      <MovieList movies={movieSearch} />
    </section>
  );
};

export default MoviesPage;
