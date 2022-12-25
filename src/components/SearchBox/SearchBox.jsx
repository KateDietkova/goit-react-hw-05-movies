import { useState } from "react";
import {
  Form,
  Input,
  SearchButton,
  IconSearchStyled,
} from './SearchBox.styled';

export const SearchBox = ({ onUpdateQuery }) => {
    const [query, setQuery] = useState('');

   const onChange = e => {
       setQuery(e.target.value);
    }
    const onSubmit = e => {
        e.preventDefault();
        onUpdateQuery(query);
  };
  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        name="query"
        value={query}
        onChange={onChange}
        placeholder="Search movie..."
      />
      <SearchButton type="submit">
        <IconSearchStyled size="24" />
      </SearchButton>
    </Form>
  );
};