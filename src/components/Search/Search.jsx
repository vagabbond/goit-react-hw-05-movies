import { SearchBar } from '../SearchBar/SearchBar';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const KEY = '41ab92c3df4691a01a2e362c5f7f74c0';

export const Search = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) return;
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1`
      );
      const data = await response.json();
      console.log(data);
      setMovies(data.results);
    };
    fetchMovies();
  }, [query]);

  const onSubmit = query => {
    setQuery(query);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {movies.length > 0 && (
        <>
          <h1>Search results for {query}</h1>
          <ul>
            {movies.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`${movie.id}`}>{movie.title || movie.name}</Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};
