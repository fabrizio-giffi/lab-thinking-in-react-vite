import React from "react";

function SearchBar({ query, setQuery, check, setCheck }) {
  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  const handleCheck = () => {
    setCheck(!check);
  };

  return (
    <>
      <label>
        Search
        <input type="text" value={query} onChange={handleInput} />
      </label>

      <input
        id="checkBox"
        type="checkbox"
        value={check}
        onChange={handleCheck}
      />
      <label htmlFor="checkBox">Only show products in stock</label>
    </>
  );
}

export default SearchBar;
