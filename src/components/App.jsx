import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout';

const TrendingMovies = lazy(() => import('../pages/Home/Home'));
const Search = lazy(() => import('../pages/Search/Search'));
const Movie = lazy(() => import('../pages/Movie/Movie'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-05-movies" element={<SharedLayout />}>
        <Route index element={<TrendingMovies />} />
        <Route path="movies" element={<Search />} />
        <Route path="movies/:id" element={<Movie />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
