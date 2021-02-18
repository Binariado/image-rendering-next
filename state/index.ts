import { Env } from "../utils";
import StoreDev from './store.dev';
import StoreProd from './store.dev';

const configureStoreComponent = (() => {
  if (Env.NODE_ENV === "production") {
    return StoreProd
  }
  return StoreDev
})()

export const configureStore = configureStoreComponent
  