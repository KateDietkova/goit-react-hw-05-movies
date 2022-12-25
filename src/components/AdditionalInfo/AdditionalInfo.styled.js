import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AdditionalInfoWrapper = styled.div`
  margin: 20px auto;
  margin-top: 0;
  text-align: center;
`;

export const AdditionalInfoTitle = styled.h2`
  margin-bottom: 10px;
`;

export const AdditionalInfoList = styled.ul`
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
