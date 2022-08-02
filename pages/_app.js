import '../globals.css'
import toast, { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux'
import configureStore from '../redux/store'
import { persistStore } from 'redux-persist';
// import {persistor} from '../redux/reducers/rootReducer'
import { PersistGate } from 'redux-persist/integration/react';
export const store = configureStore()
export const persistor = persistStore(store)


function MyApp({ Component, pageProps }) {
  return (


    <Provider store={store} >
      <PersistGate  persistor={persistor}>
        <Toaster />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>

  )
}

export default MyApp;
