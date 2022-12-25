import styled from 'styled-components';

export const FilmCard = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const FilmInfoWrapper = styled.div`
  margin-left: 20px;
`;

export const FilmTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const FilmPoster = styled.img`
  border-radius: 5px;
  object-fit: cover;
  width: 395px;
  height: 574px;
`;

export const FilmInfoTitle = styled.p`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const FilmInfoDesc = styled.span`
  font-size: 15px;
  font-weight: 400;
`;

export const FilmInfoOverview = styled.p`
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: 400;
  text-align: justify;
  width: 450px;
`;
