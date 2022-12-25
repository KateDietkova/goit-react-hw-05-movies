import styled from 'styled-components';

export const CastGallery = styled.ul`
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

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
`;

export const CastImg = styled.img`
  border-radius: 5px;
  object-fit: cover;
  object-position: top;
  width: 385px;
  height: 470px;
`;

export const CastName = styled.p`
  font-size: 18px;
  font-weight: 700;
`;
