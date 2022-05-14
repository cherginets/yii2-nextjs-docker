import '../styles/globals.scss'
import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider} from '@emotion/react';
import _theme from '../styles/_theme';
import _createEmotionCache from '../styles/_createEmotionCache';
import {Provider} from "react-redux";
// import store from "../redux/createStore";
import 'react-toastify/dist/ReactToastify.css';

const clientSideEmotionCache = _createEmotionCache();

export async function getInitialProps ({Component, ctx}) {
  return {
    pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
  };
}

export default function MyApp(props) {
  const {
    Component, emotionCache =
      clientSideEmotionCache, pageProps
  } = props;

  return (
    // <Provider store={store}>
        <CacheProvider value={emotionCache}>
          <Head>
            <title>GetProxy.io</title>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
          </Head>
          <ThemeProvider theme={_theme}>
            <CssBaseline/>
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
    // </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
