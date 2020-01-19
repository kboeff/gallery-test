import React from 'react';

import Navbar from './Navbar';
import Loading from './Loading';

export default ({ data, isLoading, handleAlbumClick, switchView }) => {
  const albums = [...new Set(data.map(image => image.albumId))];
  console.log(isLoading)
  
  return (
    <div className="container">
      <Navbar switchView={switchView} />
      <h3 className="section-title">All albums</h3>
      {isLoading ? 
        <Loading /> : 
        (<div className="albums-container">
          {albums.map(album => 
            <div 
              key={album}
              className="album"
              onClick={() =>handleAlbumClick(album)}
            >
              {album}
            </div>)}
        </div>)
      }
    </div>
  );
};