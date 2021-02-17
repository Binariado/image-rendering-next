import {
  SELECTPLAYER,
} from './images.types';

export const selectPlayer = (payload) => {
  return {
    payload,
    type: SELECTPLAYER
  };
};
