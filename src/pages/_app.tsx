import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Footer from '../components/organisms/Footer/Footer'
import Navbar from '../components/organisms/Navbar/Navbar'
import GlobalStyle from '../styles/globals'
import theme from '../styles/theme'
import NextNProgress from 'nextjs-progressbar'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { getPersistor } from '@rematch/persist'
import { AuthProvider } from '../store/auth'
import axios from 'axios'
import { SWRConfig } from 'swr'
import React from 'react'
import { useRouter } from 'next/router'

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
  const router = useRouter()

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
              {router.pathname !== '/dashboard' && <Navbar />}

              <NextNProgress color={theme.colors.primary} />
              <Component {...pageProps} />
              <GlobalStyle />

              {router.pathname !== '/dashboard' && <Footer />}
            </AuthProvider>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </SWRConfig>
  )
}

export default MyApp
