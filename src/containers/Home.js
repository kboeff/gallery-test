import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Albums from '../components/Albums.js';
import Gallery from '../components/Gallery.js';

export default ({ data, albumSelected }) => {
  const favourites = useSelector(state => state);
  const [view, setView] = useState('albums');

  const switchView = (newView) => {
    setView(newView);
  }

  switch(view) {
    case 'albums':
      return <Albums data={data} switchView={switchView} />;
    case 'gallery':
      const images = data.filter(image => image.album === albumSelected);
      return <Gallery images={images} switchView={switchView} />;
    case 'favourites':
      const favImages = data.filter(image => favourites.indexOf(image.id) !== -1);
      return <Gallery images={favImages} switchView={switchView} />;
    default:
      return <div>Error: no view selected</div>;
  }
}