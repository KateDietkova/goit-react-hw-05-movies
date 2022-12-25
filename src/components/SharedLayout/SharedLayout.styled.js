import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 15px 0;
  margin-bottom: 16px;
  box-shadow: rgba(0, 0, 0, 0.45) 10px 20px 20px -20px;

  > nav {
    display: flex;
    margin: 0 auto;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
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
