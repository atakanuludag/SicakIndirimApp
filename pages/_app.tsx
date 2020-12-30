import React from 'react';
import { Provider } from 'react-redux'
import store from "../redux";
import PageWithLayoutType from '../types/PageWithLayoutType';

import '../styles/global.scss';

//https://medium.com/swlh/typing-next-js-components-using-typescript-2f1d0dc30c4c
//https://www.tomasgildev.com/posts/next-persistent-layout-typescript

type AppLayoutProps = {
  Component: PageWithLayoutType
  pageProps: any
}

function HotDealApp({ Component, pageProps }: AppLayoutProps) {

  const Layout = Component.layout || ((children) => <>{children}</>)

  return (
    <Provider store={store}>
      <Layout><Component {...pageProps} /></Layout>
    </Provider>

  )
}

export default HotDealApp;
