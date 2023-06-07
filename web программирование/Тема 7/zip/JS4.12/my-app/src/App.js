import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Filters from './components/Filters';
import image1 from './assets/12345.jpeg';
import image2 from './assets/123.jpeg';
import image3 from './assets/1234.jpeg';


const products = [
    {
      id: 1,
      name: 'Product 1',
      country: 'Russia',
      size: 'XXL',
      image: image1
    },
    {
      id: 2,
      name: 'Product 1',
      country: 'Russia',
      size: 'XXL',
      image: image2
    },
    {
      id: 3,
      name: 'Product 1',
      country: 'USA',
      size: 'XL',
      image: image3
    },
  // Другие товары...
];

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterProducts = (country, size) => {
    let filtered = products;
    if (country) {
      filtered = filtered.filter((product) => product.country === country);
    }
    if (size) {
      filtered = filtered.filter((product) => product.size === size);
    }
    setFilteredProducts(filtered);
  };

  return (
    <div className="App">
      <header>
        {/* Ваш хедер и слайдер */}
      </header>
      <Filters filterProducts={filterProducts} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
