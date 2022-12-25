import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from 'services/fetchApi';
import { Loader } from 'components/Loader/Loader';
import {
  ReviewsList,
  ReviewsItem,
  ReviewsAuthor,
  ReviewsContent,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getReviews = async () => {
      try {
        const reviews = await getFilmReviews(movieId);
        setReviews(reviews);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log('Error in Reviews', error);
      }
    };
    getReviews();
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <>
      {!isLoading && <ReviewsList>
        {reviews.map(({ id, author, content }) => (
          <ReviewsItem key={id}>
            <ReviewsAuthor>Author: {author}</ReviewsAuthor>
            <ReviewsContent>{content}</ReviewsContent>
          </ReviewsItem>
        ))}
      </ReviewsList>}
      {isLoading && <Loader />}
    </>
  );
};

export default Reviews;
