import { SearchInput, SearchForm, SearchButton } from './SearchBar.styled.jsx';
import { useState } from 'react';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  return (
    <SearchForm
      onSubmit={e => {
        e.preventDefault();
        onSubmit(query);
      }}
    >
      <SearchInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
};
