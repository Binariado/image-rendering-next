import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk';
import { combinedReducers } from './reducers';

const store = createStore(
  combinedReducers,
  applyMiddleware(thunk)
)

const persistor = persistStore(store);

const configureStore =  {
  store,
  persistor
}

export default configureStore
