import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Albums from '../components/Albums.js';
import Gallery from '../components/Gallery.js';

export default ({ data }) => {
  const favourites = useSelector(state => state);
  const [view, setView] = useState({ path: 'albums', selection: -1 });

  const switchView = (newView) => {
    setView({...view, path: newView});
  }

  const handleAlbumClick = (albumId) => {
    setView({ path: 'gallery', selection: albumId });
  }

  switch(view.path) {
    case 'albums':
      return (
        <Albums 
          data={data}
          handleAlbumClick={handleAlbumClick}
          switchView={switchView}
        />
      );
    case 'gallery':
      const images = data.filter(image => image.albumId === view.selection);
      return <Gallery images={images} switchView={switchView} album={view.selection} />;
    case 'favourites':
      const favImages = data.filter(image => favourites.indexOf(image.id) !== -1);
      return <Gallery images={favImages} switchView={switchView} />;
    default:
      return <div>Error: no view selected</div>;
  }
}