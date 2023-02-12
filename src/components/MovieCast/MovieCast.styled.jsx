import styled from 'styled-components';

export const CastWrapper = styled.div`
  padding: 20px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  list-style-type: none;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 10px;
`;

export const CastTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  padding: 5px;
`;
