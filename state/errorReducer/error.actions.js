import {
  ERROR,
} from './error.types';

export const SET_ERROR = (payload) => {
  return {
    payload,
    type: ERROR
  };
};

export function clearErros() {
  return (dispatch) => {
    dispatch(SET_ERROR({error:{}}));
  };
}