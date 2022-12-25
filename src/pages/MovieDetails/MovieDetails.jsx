import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
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

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const getMovieInfo = async () => {
      try {
        const movieInfo = await getFilmById(movieId);
        setMovie(movieInfo);
      } catch (error) {
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
      <Section>
        <LinkStyled to={backLinkHref}>Go back</LinkStyled>
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
        <Outlet />
      </Section>
    </main>
  );
};
