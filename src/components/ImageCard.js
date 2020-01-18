import React from 'react';
import { connect } from 'react-redux';
import { addFavourite, removeFavourite } from '../store/actions';

const ImageCard = ({ image, favourites, addFavourite, removeFavourite }) => {
  const isFavourite = favourites.indexOf(image.id) !== -1;

  const toggleStatus = () => {
    if (isFavourite) {
      return removeFavourite(image.id);
    } else {
      return addFavourite(image.id)
    }
  }
  
  return (
    <div className="image-card">
      <img className="image" src={image.url} alt={image.title} width="160px"/>
      <div className="image-title">{image.title}</div>
      <div className="fav-container" onClick={toggleStatus}>
        <img
          className="fav-icon"
          alt="Favourites Icon"
          src={`./static/${isFavourite ? "yellow" : "grey"}-heart.png`}
        />
        <div>Favourites</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { favourites: state.favourites };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavourite: (id) => dispatch(addFavourite(id)),
    removeFavourite: (id) => dispatch(removeFavourite(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageCard);