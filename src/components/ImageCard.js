import React from 'react';
import { useSelector } from 'react-redux';

export default ({ image }) => {
  console.log(image)
  // const favourites = useSelector(state => state);
  // const starColor = favourites.indexOf(image.id) ? "yellow" : "grey";
  
  return (
    <div className="image-card">
      <img className="image" src={image.url} alt={image.title} width="160px"/>
      <div className="image-title">{image.title}</div>
      <div className="fav-container">
        <img className="fav-icon" src={`./static/yellow-heart.png`} alt="Favourites Icon" />
        <div>Favourites</div>
      </div>
    </div>
  );
};