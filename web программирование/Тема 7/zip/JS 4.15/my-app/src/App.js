import React from 'react';
import SearchableVideoList from './SearchableVideoList';

function App() {
  // Предположим, у вас есть массив видео
  const videos = [
    { id: 1, title: 'Video 1' },
    { id: 2, title: 'Video 2' },
    { id: 3, title: 'Video 3' },
    // ...
  ];

  return (
    <div className="App">
      <h1>Searchable Video List</h1>
      <SearchableVideoList videos={videos} />
    </div>
  );
}

export default App;
