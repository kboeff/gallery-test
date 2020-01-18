import React from 'react';
import ImageCard from './ImageCard';
import Navbar from './Navbar';

export default ({ images, album, switchView }) => {

  return (
    <div className="container">
      <Navbar switchView={switchView} />>
      <h3 className="section-title">Album ID: {album}</h3>
      <div className="gallery-container">
        {images.map(image => <ImageCard key={image.id} image={image} />)}
      </div>
    </div>
  );
};