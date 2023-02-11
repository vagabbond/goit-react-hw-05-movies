import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardWraper = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
`;

export const StyledLink = styled(Link)`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
`;
