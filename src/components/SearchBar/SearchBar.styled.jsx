import styled from 'styled-components';

export const SearchInput = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid grey;
  outline: none;
  padding: 5px;
  font-size: 16px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;

  margin-bottom: 20px;
  padding-left: 20px;
  padding-top: 20px;
`;

export const SearchButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #fff;
  padding: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 20px;
`;
