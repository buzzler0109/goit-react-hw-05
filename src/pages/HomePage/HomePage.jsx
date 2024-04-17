import { useState, useEffect } from "react";
import { fetchMoviesTrending } from "../../api/movies";

import MovieList from "../../components/movie_list/MovieList";

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetchMoviesTrending();
        setTrendMovies(res.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <MovieList movies={trendMovies} />
    </div>
  );
};

export default HomePage;
