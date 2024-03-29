import { AuthProvider } from '@/contexts/AuthContext'
import { LoadingProvider } from '@/contexts/LoadingContext'
import { ProductsProvider } from '@/contexts/ProductsContext'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { DashBoardProvider } from '@/contexts/DashboardContext'
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import NextNProgress from 'nextjs-progressbar'
import Footer from '../components/organisms/Footer/Footer'
import Navbar from '../components/organisms/Navbar/Navbar'
import GlobalStyle from '../styles/globals'
import theme from '../styles/theme'
import Loading from '@/components/organisms/Loading/Loading'
import dotenv from 'dotenv'

dotenv.config()

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter()
  const [providerAuthLoaded, setProviderAuthLoaded] = useState(true)
  const [providerProductsLoaded, setProviderProductsLoaded] = useState(true)

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider setProviderLoaded={setProviderAuthLoaded}>
        <DashBoardProvider>
          <ProductsProvider setProviderLoaded={setProviderProductsLoaded}>
            <NextNProgress color={theme.colors.primary} />
            {providerAuthLoaded && providerProductsLoaded && <Loading />}

            <LoadingProvider
              providerAuthLoaded={providerAuthLoaded}
              providerProductsLoaded={providerProductsLoaded}
            >
              {router.pathname !== '/dashboard' && <Navbar />}
              <Component {...pageProps} />
              {router.pathname !== '/dashboard' && <Footer />}
            </LoadingProvider>
          </ProductsProvider>
        </DashBoardProvider>
      </AuthProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
