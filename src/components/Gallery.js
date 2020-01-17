import React from 'react';
import ImageCard from './ImageCard.js';

export default ({ images }) => {
  return (
    <div>
      {images.map(image => <ImageCard image={image} />)}
    </div>
  );
};