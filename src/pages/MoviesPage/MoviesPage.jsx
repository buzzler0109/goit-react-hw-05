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
  const [notFound, setNotFound] = useState(false);
  const [loader, setLoader] = useState(false);

  const moviesName = searchParams.get("query") ?? "";

  useEffect(() => {
    async function fetchResponse() {
      try {
        setLoader(true);
        setNotFound(false);
        const res = await fetchMoviesSearch(moviesName);
        const dataResults = res.data.results;
        if (moviesName && !(dataResults.length > 0)) return setNotFound(true);
        setMovieSearch(dataResults);
      } catch (error) {
        console.log(error);
        setNotFound(true);
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
      <MovieList movieResults={movieSearch} />
      {notFound && <div className={css.found}></div>}
    </section>
  );
};

export default MoviesPage;
