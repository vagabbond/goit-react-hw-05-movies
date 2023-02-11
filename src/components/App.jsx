import { Routes, Route } from 'react-router-dom';

import { CardWraper, StyledLink } from './App.styled';
import { TrendingMovies } from './Home/Home';
import { Search } from './Search/Search';
import { Movie } from './Movie/Movie';
import { MovieCast } from './Movie/MovieCast/MovieCast';
import { MovieReviews } from './Movie/MovieReviews/MovieReviews';

export const App = () => {
  return (
    <>
      <CardWraper>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">About</StyledLink>
      </CardWraper>
      <Routes>
        <Route path="/" element={<TrendingMovies />} />
        <Route path="/movies" element={<Search />} />
        <Route path="/movies/:id" element={<Movie />}>
          <Route path="/movies/:id/cast" element={<MovieCast />} />
          <Route path="/movies/:id/reviews" element={<MovieReviews />} />
        </Route>
      </Routes>
    </>
  );
};
