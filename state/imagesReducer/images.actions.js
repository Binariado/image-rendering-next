import {
  SELECTIMAGES,
  IMAGESALL,
  IMAGESADD
} from './images.types';

export const selectImages = (payload) => {
  return {
    payload,
    type: SELECTIMAGES
  };
};

export const imagesAll = (payload) => {
  return {
    payload,
    type: IMAGESALL
  };
};

export const imagesAdd = (payload) => {
  return {
    payload,
    type: IMAGESADD
  };
};
