import { AuthProvider } from '@/contexts/AuthContext'
import { ProductsProvider } from '@/contexts/ProductsContext'
import { LoadingProvider } from '@/contexts/LoadingContext'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import NextNProgress from 'nextjs-progressbar'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Footer from '../components/organisms/Footer/Footer'
import Navbar from '../components/organisms/Navbar/Navbar'
import GlobalStyle from '../styles/globals'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter()

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <NextNProgress color={theme.colors.primary} />
        <LoadingProvider>
          <ProductsProvider>
            {router.pathname !== '/dashboard' && <Navbar />}
            <Component {...pageProps} />
            {router.pathname !== '/dashboard' && <Footer />}
          </ProductsProvider>
        </LoadingProvider>
      </AuthProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
