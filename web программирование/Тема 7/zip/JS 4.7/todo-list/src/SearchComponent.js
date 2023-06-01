import React, { useState } from 'react';

const SearchComponent = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = e => {
    const term = e.target.value;
    setSearchTerm(term);

    const results = items.filter(item =>
      item.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(results);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search..." />
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
