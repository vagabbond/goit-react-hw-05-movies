import {
  TrendingItem,
  TrendingList,
  TrendingTitle,
  CardWraper,
  TrendingItemLink,
} from './Home.styled';

import { useState, useEffect } from 'react';

const KEY = '41ab92c3df4691a01a2e362c5f7f74c0';

export const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      });
  }, []);
  return (
    <CardWraper>
      <TrendingTitle>Trending today</TrendingTitle>
      <TrendingList>
        {movies.map(el => {
          return (
            <TrendingItem key={el.id}>
              <TrendingItemLink to={`/movies/${el.id}`}>
                <p>{el.title || el.name}</p>
              </TrendingItemLink>
            </TrendingItem>
          );
        })}
      </TrendingList>
    </CardWraper>
  );
};
