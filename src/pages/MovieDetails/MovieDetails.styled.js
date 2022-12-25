import styled from 'styled-components';
import { Link} from 'react-router-dom';

export const Section = styled.section`
  padding: 0 0 60px 0;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  background-color: #93dbb2;
  margin-bottom: 20px;
  max-width: 110px;
  border-radius: 4px;
  font-weight: bold;
  color: #000;
`;




