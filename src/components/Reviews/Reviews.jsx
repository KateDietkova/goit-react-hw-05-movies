import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from 'services/fetchApi';
import {
  ReviewsList,
  ReviewsItem,
  ReviewsAuthor,
  ReviewsContent,
} from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviews = await getFilmReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        console.log('Error in Reviews', error);
      }
    };
    getReviews();
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <ReviewsList>
      {reviews.map(({ id, author, content }) => (
        <ReviewsItem key={id}>
          <ReviewsAuthor>Author: {author}</ReviewsAuthor>
          <ReviewsContent>{content}</ReviewsContent>
        </ReviewsItem>
      ))}
    </ReviewsList>
  );
};
