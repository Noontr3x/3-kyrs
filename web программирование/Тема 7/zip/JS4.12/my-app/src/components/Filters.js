import React from 'react';

const Filters = ({ filterProducts }) => {
  return (
    <div className="filters">
      <select
        onChange={(e) => filterProducts(e.target.value, null)}
        defaultValue=""
      >
        <option value="">All Countries</option>
        <option value="Russia">Russia</option>
        {/* Другие страны... */}
      </select>
      <select
        onChange={(e) => filterProducts(null, e.target.value)}
        defaultValue=""
      >
        <option value="">All Sizes</option>
        <option value="XXL">XXL</option>
        {/* Другие размеры... */}
      </select>
    </div>
  );
};

export default Filters;
