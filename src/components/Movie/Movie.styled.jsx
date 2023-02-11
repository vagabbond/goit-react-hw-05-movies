import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardWraper = styled.div`
  display: flex;
  width: 800px;
  padding-left: 20px;
`;

export const MovieWrapper = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  width: 75%;
`;

export const MovieTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const MovieParagraph = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const MovieSubTitle = styled.h2`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const MovieList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MovieNav = styled.div`
  padding-left: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
`;

export const MovieNavList = styled.ul`
  display: flex;
  gap: 20px;
  list-style-type: none;
`;

export const MovieLink = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  color: #000;
  text-decoration: none;
`;
