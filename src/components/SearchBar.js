import React from "react";

function SearchBar({ filterChange, sortChange }) {

  function handleFilterChange(event) {
    console.log('*****  in Search filter change evt.tgt.val = ', event.target.value);
    filterChange(event.target.value)
  }

  function handleSortChange(event) {
      console.log('*****  in Sort filter change evt.tgt.val = ', event.target.defaultValue);
      sortChange(event.target.defaultValue)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={handleSortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={handleSortChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
