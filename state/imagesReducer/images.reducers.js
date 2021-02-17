import {
  SELECTIMAGES,
  IMAGESALL,
} from './images.types';

const INITIAL_STATE = {
  selectPlayer: null,
  imagesAll: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECTIMAGES:
      return {
        ...state,
        selectPlayer: action.payload
      };
    case IMAGESALL:
      const { imagesAll } = state;
      imagesAll.push(action.payload);
      return {
        ...state,
        imagesAll
      };
    default: return state;
  }
};

export default reducer;