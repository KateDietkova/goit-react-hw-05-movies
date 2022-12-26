import { useState } from "react";
import {
  Form,
  Input,
  SearchButton,
  IconSearchStyled,
} from './SearchBox.styled';
import PropTypes from 'prop-types';

export const SearchBox = ({ onUpdateQuery }) => {
    const [query, setQuery] = useState('');

   const onChange = e => {
       setQuery(e.target.value);
    }
    const onSubmit = e => {
        e.preventDefault();
        onUpdateQuery(query.trim());
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

SearchBox.propTypes = {
  onUpdateQuery: PropTypes.func.isRequired,
};