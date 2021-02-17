import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combinedReducers } from './reducers';

export const store = createStore(
  combinedReducers,
  composeWithDevTools()
)

 const configureStore =  {
  store
}

export default configureStore
