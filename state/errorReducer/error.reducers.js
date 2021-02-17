import {
  ERROR
} from './error.types';

const INITIAL_STATE = {
  error: {}
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ERROR:
      const stateError = state.error;
      return {
        ...stateError,
        ...action.payload,
      };
    default: return state;
  }
};

export default reducer;