import { useState, useEffect, useRef, Suspense } from "react";
import {
  useLocation,
  useParams,
  NavLink,
  Link,
  Outlet,
} from "react-router-dom";
import { fetchMoviesDetails } from "../../api/movies";

import { Loader } from "../../components/loader/Loader";

import clsx from "clsx";
import css from "./MovieDetailsPage.module.scss";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.nav__link, isActive && css.active);
};

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const location = useLocation();
  const backLink = useRef(location.state ?? "/movies");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function fetchResponse() {
      try {
        setLoader(true);
        const res = await fetchMoviesDetails(id);
        setMovieDetails(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchResponse();
  }, [id]);

  const { title, poster_path, overview, release_date, vote_average, genres } =
    movieDetails;

  return (
    <section className={css.details}>
      {loader && <Loader />}

      <div className={css.wrapp__back}>
        <Link to={backLink.current} className={css.back__link}>
          Go back
        </Link>
      </div>

      <div className={css.body}>
        {poster_path && (
          <div className={css.wrapp__img}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
            />
          </div>
        )}

        <div className={css.wrapp__content}>
          {title && (
            <h2 className={css.title}>
              {title}{" "}
              {release_date && <span>({release_date.split("-")[0]})</span>}
            </h2>
          )}

          <p className={css.info__list}>
            <li className={css.text}>Users rating: {vote_average}</li>
          </p>

          {overview ? (
            <div className={css.overview}>
              <h3 className={css.subtitle}>Overview:</h3>
              <p className={css.text}>{overview}</p>
            </div>
          ) : (
            <div className={css.overview}>
              <h3 className={css.subtitle}>Overview:</h3>
              <p className={css.text}>No description</p>
            </div>
          )}

          {genres?.length > 0 && (
            <div className={css.genres}>
              <h3 className={css.subtitle}>Genres:</h3>
              <ul className={css.genres__list}>
                {genres.map((item) => (
                  <li key={item.id} className={css.text}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <ul className={css.more__list}>
        <li>
          <NavLink to="cast" className={buildLinkClass}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={buildLinkClass}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MovieDetailsPage;
