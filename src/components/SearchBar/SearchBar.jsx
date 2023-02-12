import { SearchInput, SearchForm, SearchButton } from './SearchBar.styled.jsx';
import { useSearchParams } from 'react-router-dom';

export const SearchBar = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
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
        onChange={e => setSearchParams({ query: e.currentTarget.value })}
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
};
