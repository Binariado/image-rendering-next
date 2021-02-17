import {
  AUTHENTICATED
} from './auth.types';

export const authenticated = (payload) => {
  return {
    payload,
    type: AUTHENTICATED
  };
};
