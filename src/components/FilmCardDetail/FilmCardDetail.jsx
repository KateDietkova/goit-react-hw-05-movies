import {
  getPosterFilm,
  getGenres,
  getDate,
} from 'services/fetchApi';

import {
  FilmCard,
  FilmInfoWrapper,
  FilmPoster,
  FilmTitle,
  FilmInfoTitle,
  FilmInfoDesc,
  FilmInfoOverview,
} from './FilmCardDetail.styled';

export const FilmCardDetail = ({ movie }) => {
  const { title, poster_path, release_date, overview, genres, vote_average } =
    movie;
  return (
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
  );
};
