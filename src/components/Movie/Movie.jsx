import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const KEY = '41ab92c3df4691a01a2e362c5f7f74c0';

export const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
      );
      const data = await response.json();
      console.log(data);
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  return (
    <>
      <h1>Movie with id: {movie.id}</h1>
    </>
  );
};
