import {
  AUTHENTICATED,
  INCREMENT_COUNTER
} from './auth.types';

const INITIAL_STATE = {
  isAuthenticated: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...action.payload
      };
    default: return state;
  }
};

export default reducer;