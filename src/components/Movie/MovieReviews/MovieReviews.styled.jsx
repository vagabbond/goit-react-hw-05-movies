import styled from 'styled-components';

export const ReviewsWrapper = styled.div`
  padding: 20px;
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  list-style-type: none;
`;

export const ReviewsItem = styled.li`
  display: flex;
  flex-direction: column;

  border: 1px solid grey;
  border-radius: 5px;
  padding: 10px;
`;

export const ReviewsAuthor = styled.h2`
  font-size: 20px;
  font-weight: 700;
  padding: 5px;
`;
export const ReviewsTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  padding: 5px;
`;
