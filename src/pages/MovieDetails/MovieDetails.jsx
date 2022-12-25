import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { MdArrowBackIosNew } from 'react-icons/md';
import { Loader } from 'components/Loader/Loader';
import {
  getFilmById,
  getPosterFilm,
  getGenres,
  getDate,
} from 'services/fetchApi';
import { Outlet } from 'react-router-dom';
import {
  FilmCard,
  FilmInfoWrapper,
  LinkStyled,
  FilmPoster,
  FilmTitle,
  FilmInfoTitle,
  FilmInfoDesc,
  FilmInfoOverview,
  AdditionalInfoWrapper,
  AdditionalInfo,
  AdditionalInfoTitle,
  AdditionalItem,
  Section,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setIsLoading(true);
    const getMovieInfo = async () => {
      try {
        const movieInfo = await getFilmById(movieId);
        setMovie(movieInfo);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log('Error in MovieDetails', error);
      }
    };
    getMovieInfo();
  }, [movieId]);

  if (movie.lenght === 0) {
    return;
  }

  const { title, poster_path, release_date, overview, genres, vote_average } =
    movie;

  return (
    <main>
      {!isLoading && <Section>
        <LinkStyled to={backLinkHref}>
          <MdArrowBackIosNew size={24} />
          Go back
        </LinkStyled>
        <FilmCard>
          <FilmPoster src={getPosterFilm(poster_path)} alt={title} />
          <FilmInfoWrapper>
            <FilmTitle>
              {title} ({getDate(release_date)})
            </FilmTitle>
            <FilmInfoTitle>
              User Score: <FilmInfoDesc>{vote_average}</FilmInfoDesc>
            </FilmInfoTitle>
            <FilmInfoTitle>Overview: </FilmInfoTitle>
            <FilmInfoOverview>{overview}</FilmInfoOverview>
            <FilmInfoTitle>
              Genres: <FilmInfoDesc>{getGenres(genres)}</FilmInfoDesc>
            </FilmInfoTitle>
          </FilmInfoWrapper>
        </FilmCard>
        <AdditionalInfoWrapper>
          <AdditionalInfoTitle>Additional infomation</AdditionalInfoTitle>
          <AdditionalInfo>
            <li>
              <AdditionalItem to="cast">Cast</AdditionalItem>
            </li>
            <li>
              <AdditionalItem to="reviews">Reviews</AdditionalItem>
            </li>
          </AdditionalInfo>
        </AdditionalInfoWrapper>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Section>}
      {isLoading && <Loader />}
    </main>
  );
};

export default MovieDetails;
