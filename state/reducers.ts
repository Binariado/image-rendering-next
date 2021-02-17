
import { combineReducers } from 'redux';
import imagesReducer from './imagesReducer/images.reducers';

const rootReducer = combineReducers({
  images: imagesReducer
})

export const combinedReducers = rootReducer;

export type RootState = ReturnType<typeof combinedReducers>