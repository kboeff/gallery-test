import React from 'react';

export default ({ data }) => {
  const albums = [...new Set(data.map(image => image.albumId))]
  return (
    <div className="albums-container">
      {albums.map(album => 
        <div key={album} className="album-frame">{album}</div>)}
    </div>
  );
};