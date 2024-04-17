import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { Loader } from "../loader/Loader";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Navigation from "../navigation/Navigation";

const MovieCast = lazy(() => import("../movie_cast/MovieCast"));
const MovieReviews = lazy(() => import("../movie_reviews/MovieReviews"));

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);

import "./App.css";

const App = () => {
  return (
    <div className="wrapper">
      <Navigation />
      <main className="main">
        <div className="container">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/movies/:id" element={<MovieDetailsPage />}>
                <Route path="cast" element={<MovieCast />} />
                <Route path="reviews" element={<MovieReviews />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default App;
