import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES
} from './constants';

export const addFavourite = (imageID) => ({
  type: ADD_TO_FAVOURITES,
  payload: imageID,
});

export const removeFavourite = (imageID) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: imageID,
});