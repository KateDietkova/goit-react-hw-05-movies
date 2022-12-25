import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  overflow: hidden;
  background-color: #e3e68e;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 10px 10px -10px;
`;

export const Input = styled.input`
  width: 300px;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  padding: 8px 15px;
  border-radius: 5px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchButton = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border-radius: 5px;

  :hover {
    opacity: 1;
  }

`;

export const IconSearchStyled = styled(BsSearch)`
  fill: currentColor;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  button:hover & {
    fill: orangered;
  }
`;
