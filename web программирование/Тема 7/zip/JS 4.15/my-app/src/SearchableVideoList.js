import React, { useState } from 'react';
import SearchInput from './SearchInput';
import VideoList from './VideoList';
import { filterVideos } from './utils';

function SearchableVideoList({ videos }) {
  const [searchText, setSearchText] = useState('');
  const foundVideos = filterVideos(videos, searchText);

  const handleSearchChange = (newText) => {
    setSearchText(newText);
  };

  return (
    <>
      <SearchInput value={searchText} onChange={handleSearchChange} />
      <VideoList videos={foundVideos} emptyHeading={`No matches for "${searchText}"`} />
    </>
  );
}

export default SearchableVideoList;
