import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CastWrapper, CastList, CastTitle, CastItem } from './MovieCast.styled';

const KEY = '41ab92c3df4691a01a2e362c5f7f74c0';

const MovieCast = () => {
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
        );
        const data = await response.json();
        if (data.cast.length === 0) {
          setError('No cast');
          return;
        }
        setCast(data.cast);
      } catch {
        setError('Something went wrong');
      }
    };
    fetchCast();
  }, [id]);
  return error ? (
    <CastTitle>{error}</CastTitle>
  ) : (
    <CastWrapper>
      {cast && (
        <CastList>
          {cast.slice(0, 10).map(el => {
            return (
              <CastItem key={el.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${el.profile_path}`}
                  width="100"
                  height="100"
                  alt={el.name}
                />
                <CastTitle>{el.name}</CastTitle>
              </CastItem>
            );
          })}
        </CastList>
      )}
    </CastWrapper>
  );
};

export default MovieCast;
