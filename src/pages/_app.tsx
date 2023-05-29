/* General Imports */
import { AppProps } from 'next/app'

/* Styles Imports */
import { ThemeProvider } from 'styled-components'
import Footer from '../components/organisms/Footer/Footer'
import Navbar from '../components/organisms/Navbar/Navbar'
import GlobalStyle from '../styles/globals'
import theme from '../styles/theme'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { getPersistor } from '@rematch/persist'
import { AuthProvider } from '../store/auth'
import axios from 'axios'
import { SWRConfig } from 'swr'
import React from 'react'

const persistor = getPersistor()

axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.withCredentials = true

const fetcher = async (url: string) => {
  try {
    const res = await axios.get(url)
    return res.data
  } catch (err: any) {
    throw err.response.data
  }
}

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SWRConfig
      value={{
        fetcher,
        dedupingInterval: 5000,
      }}
    >
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AuthProvider>
              <Navbar />
              <Component {...pageProps} />
              <GlobalStyle />
              <Footer />
            </AuthProvider>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </SWRConfig>
  )
}

export default MyApp
