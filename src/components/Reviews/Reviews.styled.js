import styled from 'styled-components';


export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ReviewsItem = styled.li`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 20px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  padding: 20px;
  border-radius: 5px;
`;

export const ReviewsAuthor = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ReviewsContent = styled.p`
  text-align: justify;
`;

