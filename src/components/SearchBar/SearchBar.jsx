import { useSearchParams } from 'react-router-dom';

import { SearchInput, SearchForm } from './SearchBar.styled.jsx';

export const SearchBar = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  return (
    <SearchForm
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <SearchInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={e => setSearchParams({ query: e.currentTarget.value })}
      />
    </SearchForm>
  );
};
