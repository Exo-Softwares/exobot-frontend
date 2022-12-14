/* General Imports */
import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

/* Styles Imports */
import GlobalStyle from '../styles/globals';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <GlobalStyle />
    </SessionProvider>
  );
};

export default MyApp;