import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Section = styled.section`
  padding: 0 0 60px 0;
`;

export const LinkStyled = styled(Link)`
  display: block;
  text-align: center;
  padding: 10px 0;
  background-color: #93dbb2;
  margin-bottom: 20px;
  max-width: 100px;
  border-radius: 4px;
  font-weight: bold;
  color: #000;
`;
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

export const AdditionalInfoWrapper = styled.div`
    margin: 20px auto;
    margin-top: 0;
    text-align: center;
`;

export const AdditionalInfoTitle = styled.h2`
  margin-bottom: 10px;
`;

export const AdditionalInfo = styled.ul`
  display: flex;
  justify-content: center;
  gap: 100px;
`;

export const AdditionalItem = styled(NavLink)`
  padding: 8px 25px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  display: block;
  min-width: 100px;
  background-color: lightgray;
  transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active,
  :hover {
    color: white;
    background-color: orangered;
  }
`;

