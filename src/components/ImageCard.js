import React from 'react';
import { useSelector } from 'react-redux';

export default ({ image }) => {
  const favourite = useSelector(state => state.indexOf(image.id) !== -1);
  const starColor = favourite ? "yellow" : "grey";
  
  return (
    <div>
      <img src={image.url} alt={image.name} />
      <div>{image.name}</div>
      <div className="fav-container">
        <img src={`./static/${starColor}`} alt="fav-icon" />
      </div>
    </div>
  );
};