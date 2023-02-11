import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import {
  MovieWrapper,
  MovieTitle,
  MovieParagraph,
  MovieSubTitle,
  MovieList,
  CardWraper,
  MovieLink,
  MovieNav,
  MovieNavList,
} from './Movie.styled';

const KEY = '41ab92c3df4691a01a2e362c5f7f74c0';

export const Movie = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
      );
      const data = await response.json();
      setMovie(data);
    };
    fetchMovie();
  }, [id]);
  return (
    <>
      {movie && (
        <>
          <CardWraper>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <MovieWrapper>
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieParagraph>
                User Score: {Math.round(movie.vote_average * 10)}%
              </MovieParagraph>
              <MovieSubTitle>Overview</MovieSubTitle>
              <MovieParagraph>{movie.overview}</MovieParagraph>
              <MovieSubTitle>Genres</MovieSubTitle>
              <MovieList>
                {movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </MovieList>
            </MovieWrapper>
          </CardWraper>
          <MovieNav>
            <MovieSubTitle>Aditional info</MovieSubTitle>
            <MovieNavList>
              <li>
                <MovieLink to="cast">Cast</MovieLink>
              </li>
              <li>
                <MovieLink to="reviews">Reviews</MovieLink>
              </li>
            </MovieNavList>
          </MovieNav>
          <Outlet />
        </>
      )}
    </>
  );
};
