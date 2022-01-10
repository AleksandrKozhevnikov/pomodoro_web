import React from 'react';
import '../utils/globals.css'
import '../components/registration/registrationModal/spinner.css'
import {AppProps} from 'next/app';
import { Header } from '../components/header/Header';
import {Provider} from 'react-redux'
import {useStore} from '../store'


function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
        <Header/>
        <Component {...pageProps} />
    </Provider>
  ) 
}
export default MyApp