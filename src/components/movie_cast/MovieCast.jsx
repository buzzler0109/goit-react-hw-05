import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesCredits } from "../../api/movies";

import CastItem from "./cast_item/CastItem";
import { Loader } from "../loader/Loader";

import css from "./MovieCast.module.scss";

const MovieCast = () => {
  const { id } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!id) return;
    async function fetchResponse() {
      try {
        setLoader(true);
        const res = await fetchMoviesCredits(id);
        const dataResults = res.data;
        setMovieCast(dataResults);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchResponse();
  }, [id]);

  const { cast } = movieCast;

  return (
    <div className={css.cast}>
      {loader && <Loader />}
      {cast?.length > 0 && (
        <ul className={css.cast__list}>
          {cast.map((item) => (
            <CastItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
