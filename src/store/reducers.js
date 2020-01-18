import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES
} from './constants';

const initialState = {
  favourites: [],
};

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_FAVOURITES:
      return { ...state, 'favourites': [...state.favourites, action.payload] };
    case REMOVE_FROM_FAVOURITES:
      return { ...state, 'favourites': [...state.favourites.filter(imageID => imageID !== action.payload)] };
    default:
      return state;
  }
}