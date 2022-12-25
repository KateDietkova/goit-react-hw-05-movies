import { useState } from "react";

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
    <form onSubmit={onSubmit}>
      <input type="text" name="query" value={query} onChange={onChange} />
      <button type="submit">Search</button>
    </form>
  );
};