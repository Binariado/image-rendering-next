import {
  SELECTIMAGES,
  IMAGESALL,
  IMAGESADD,
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
    case IMAGESADD:
      const { imagesAll } = state;
      imagesAll.push(action.payload);
      return {
        ...state,
        imagesAll: imagesAll
      };
    case IMAGESALL:
      return {
        ...state,
        imagesAll: action.payload
      };
    default: return state;
  }
};

export default reducer;