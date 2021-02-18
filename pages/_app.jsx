import '../styles/globals.css'
import { Provider } from "react-redux"
import { configureStore } from '../state'

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={configureStore.store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
