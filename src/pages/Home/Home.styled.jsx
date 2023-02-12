import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardWraper = styled.div`
  padding-top: 20px;
  padding-left: 20px;
`;

export const TrendingTitle = styled.h1`
  color: black;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const TrendingList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TrendingItem = styled.li``;

export const TrendingItemLink = styled(Link)`
  color: black;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
`;
