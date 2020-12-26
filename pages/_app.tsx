import { Provider } from 'react-redux'
import store from "../redux";

import '../styles/global.scss';

import Layout from '../components/Layout';
/*
import 'jquery';
import 'popper.js';
import 'bootstrap';*/



function MyApp({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <Layout><Component {...pageProps} /></Layout>
    </Provider>

  )
}

export default MyApp
