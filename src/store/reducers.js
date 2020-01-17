import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES
} from './constants';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_FAVOURITES:
      return [...state, action.payload];
    case REMOVE_FROM_FAVOURITES:
      return state.filter(image => image.id === action.payload);
    default:
      return state;
  }
}