import { Routes, Route, Link } from 'react-router-dom';
import { TrendingMovies } from './Home/Home';
import { Search } from './Search/Search';
import { Movie } from './Movie/Movie';

export const App = () => {
  return (
    <>
      <nav>
        <Link to="/goit-react-hw-05-movies">Home</Link>
        <Link to="/movies">About</Link>
      </nav>
      <Routes>
        <Route path="/goit-react-hw-05-movies" element={<TrendingMovies />} />
        <Route path="/movies" element={<Search />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/movies/:id/cast" element={<h1>Cast</h1>} />
        <Route path="/movies/:id/reviews" element={<h1>Reviews</h1>} />
      </Routes>
    </>
  );
};
