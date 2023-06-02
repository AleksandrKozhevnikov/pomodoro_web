import React from 'react';
import '../utils/globals.css'
import '../components/registration/registrationModal/spinner.css'
import {AppProps} from 'next/app';
import { Header } from '../components/header/Header';
import {Provider} from 'react-redux'
import {useStore} from '../store'
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../utils/theme'


function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      	<ThemeProvider theme={theme}>
          <Header/>
          <Component {...pageProps} />
        </ThemeProvider>
    </Provider>
  ) 
}
export default MyApp