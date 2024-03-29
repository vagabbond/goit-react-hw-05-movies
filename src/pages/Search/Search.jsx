import { SearchBar } from '../../components/SearchBar/SearchBar';

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const KEY = '41ab92c3df4691a01a2e362c5f7f74c0';

const Search = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    if (!location.search) return;
    setQuery(decodeURIComponent(location.search.split('=')[1]));
  }, [location]);
  console.log(location);
  useEffect(() => {
    if (!query) return;
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1`
      );
      const data = await response.json();
      setMovies(data.results);
    };
    fetchMovies();
  }, [query]);

  return (
    <>
      <SearchBar />
      {movies.length > 0 && query.length > 0 && (
        <>
          <h1>Search results for {query}</h1>
          <ul>
            {movies.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`${movie.id}`} state={{ from: location }}>
                    {movie.title || movie.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};

export default Search;
