import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  ReviewsWrapper,
  ReviewsList,
  ReviewsItem,
  ReviewsAuthor,
  ReviewsTitle,
} from './MovieReviews.styled';

const KEY = '41ab92c3df4691a01a2e362c5f7f74c0';

const MovieReviews = () => {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
        );
        const data = await response.json();
        if (data.results.length === 0) {
          setError('No reviews yet');
          return;
        }
        setReviews(data.results);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchReviews();
  }, [id]);
  return error ? (
    <ReviewsTitle> {error}</ReviewsTitle>
  ) : (
    <ReviewsWrapper>
      {reviews && (
        <ReviewsList>
          {reviews.map(review => {
            return (
              <ReviewsItem key={review.id}>
                <ReviewsAuthor>{review.author}</ReviewsAuthor>
                <ReviewsTitle>{review.content}</ReviewsTitle>
              </ReviewsItem>
            );
          })}
        </ReviewsList>
      )}
    </ReviewsWrapper>
  );
};

export default MovieReviews;
