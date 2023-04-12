import { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global-styles';
import { BlogThemeProvider } from '../contexts/BlogThemeContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <BlogThemeProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </BlogThemeProvider>
    </>
  );
}
