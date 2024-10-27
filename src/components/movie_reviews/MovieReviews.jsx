import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesReviews } from "../../api/movies";

import ReviewsItem from "./reviews_item/ReviewsItem";
import { Loader } from "../loader/Loader";

import css from "./MovieReviews.module.scss";

const MovieReviews = () => {
  const { id } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!id) return;
    async function fetchResponse() {
      try {
        setLoader(true);
        const res = await fetchMoviesReviews(id);
        const dataResults = res.data;
        setMovieReviews(dataResults);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchResponse();
  }, [id]);

  const { results } = movieReviews;

  return (
    <div className={css.reviews}>
      {loader && <Loader />}
      {results?.length > 0 && (
        <ul className={css.reviews__list}>
          {results.map((item) => (
            <ReviewsItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
