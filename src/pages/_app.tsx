/* General Imports */
import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

/* Styles Imports */
import GlobalStyle from '../styles/globals';
import Navbar from '../components/organisms/Navbar/Navbar';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
      <GlobalStyle />
    </SessionProvider>
  );
};

export default MyApp;