import '../globals.css'
import toast, { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux'
import configureStore from '../redux/store'
export const store = configureStore()


function MyApp({ Component, pageProps }) {
  return(


  <Provider store={store} >
     <Toaster />
   <Component {...pageProps} />
  </Provider>



)}

export default MyApp
