import React from 'react';
import Navbar from './Navbar';

export default ({ data, handleAlbumClick, switchView }) => {
  const albums = [...new Set(data.map(image => image.albumId))]
  
  return (
    <div className="container">
      <Navbar switchView={switchView} />
      <h3 className="section-title">Albums</h3>
      <div className="albums-container">
        {albums.map(album => 
          <div 
            key={album}
            className="album"
            onClick={() =>handleAlbumClick(album)}
           >
            {album}
          </div>)}
      </div>
    </div>
  );
};