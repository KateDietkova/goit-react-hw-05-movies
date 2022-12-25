import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  display: grid;
  justify-content: center;
  grid-auto-rows: auto;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px 22px;
  max-width: 1200px;
`;

export const LinkStyled = styled(Link)`
  display: block;
  color: #000;
  transform: scale(1);
  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1.05);
  }
`;

export const FilmCard = styled.div`
  width: 385px;
  cursor: pointer;
`;

export const FilmInfoWrapper = styled.div`
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  padding-top: 12px;
`;

export const FilmTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  margin-bottom: 3px;
`;

export const FilmDescWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const FilmPoster = styled.img`
  border-radius: 5px;
  object-fit: cover;
  width: 385px;
  height: 574px;
`;
