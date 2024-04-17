import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesCredits } from "../../api/movies";

import CastItem from "./cast_item/CastItem";
import { Loader } from "../loader/Loader";

import { TbFaceIdError } from "react-icons/tb";
import css from "";

const MovieCast = () => {
  const { id } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!id) return;
    async function fetchResponse() {
      try {
        setLoader(true);
        setNotFound(false);
        const res = await fetchMoviesCredits(id);
        const dataResults = res.data;
        if (!(dataResults.cast.length > 0)) return setNotFound(true);
        setMovieCast(dataResults);
      } catch (error) {
        console.log(error);
        setNotFound(true);
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
      {notFound && (
        <div className={css.found}>
          <TbFaceIdError />
        </div>
      )}
    </div>
  );
};

export default MovieCast;
