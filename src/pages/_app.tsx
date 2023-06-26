import { AuthProvider } from '@/contexts/AuthContext'
import { LoadingProvider } from '@/contexts/LoadingContext'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import NextNProgress from 'nextjs-progressbar'
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Footer from '../components/organisms/Footer/Footer'
import Navbar from '../components/organisms/Navbar/Navbar'
import GlobalStyle from '../styles/globals'
import theme from '../styles/theme'
import Loading from '@/components/organisms/Loading/Loading'

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter()
  const [providerLoaded, setProviderLoaded] = useState(true)

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider setProviderLoaded={setProviderLoaded}>
        <NextNProgress color={theme.colors.primary} />
        {!providerLoaded && (
          <LoadingProvider>
            {router.pathname !== '/dashboard' && <Navbar />}
            <Component {...pageProps} />
            {router.pathname !== '/dashboard' && <Footer />}
          </LoadingProvider>
        )}
        {providerLoaded && <Loading />}
      </AuthProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
