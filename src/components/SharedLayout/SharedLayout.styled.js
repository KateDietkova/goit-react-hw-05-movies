import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ImFilm } from 'react-icons/im';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  margin-bottom: 16px;
  box-shadow: rgba(0, 0, 0, 0.45) 10px 20px 20px -20px;

  > nav {
    display: flex;
    margin: 0 auto;
  }
`;


export const LogoIcon = styled(ImFilm)`
  fill: orangered;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
