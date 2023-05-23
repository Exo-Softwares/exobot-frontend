/* General Imports */
import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

/* Styles Imports */
import GlobalStyle from '../styles/globals';
import Navbar from '../components/organisms/Navbar/Navbar';
import Footer from '../components/organisms/Footer/Footer';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ThemeProvider theme={theme}>
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <GlobalStyle />
    </SessionProvider>
    </ThemeProvider>
  );
};

export default MyApp;