import React from 'react';

function SearchInput({ value, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} placeholder="Search videos" />
  );
}

export default SearchInput;
