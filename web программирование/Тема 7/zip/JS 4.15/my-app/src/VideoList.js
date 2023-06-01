import React from 'react';

function VideoList({ videos, emptyHeading }) {
  if (videos.length === 0) {
    return <p>{emptyHeading}</p>;
  }

  return (
    <ul>
      {videos.map((video) => (
        <li key={video.id}>{video.title}</li>
      ))}
    </ul>
  );
}

export default VideoList;
