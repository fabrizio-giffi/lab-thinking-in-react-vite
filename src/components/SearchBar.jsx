import React from "react";

function SearchBar({ query, setQuery, check, setCheck }) {
  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  const handleCheck = () => {
    setCheck(!check);
  };

  return (
    <div className="searchBar">
      <div>
        <label>
          Search
          <input type="text" value={query} onChange={handleInput} />
        </label>
      </div>
      <div>
        <input
          id="checkBox"
          type="checkbox"
          value={check}
          onChange={handleCheck}
        />
        <label htmlFor="checkBox">Only show products in stock</label>
      </div>
    </div>
  );
}

export default SearchBar;
