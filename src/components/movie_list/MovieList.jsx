import MovieItem from "./MovieItem/MovieItem";

import css from "./MovieList.module.scss";

const MovieList = ({ movies }) => {
  return (
    <ul className={css.list}>
      {movies &&
        movies.map((movie) => <MovieItem key={movie.id} item={movie} />)}
    </ul>
  );
};

export default MovieList;
