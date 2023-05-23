/* General Imports */
import { AppProps } from 'next/app';

/* Styles Imports */
import { ThemeProvider } from 'styled-components';
import Footer from '../components/organisms/Footer/Footer';
import Navbar from '../components/organisms/Navbar/Navbar';
import GlobalStyle from '../styles/globals';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;