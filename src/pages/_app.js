import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";


import { wrapper } from '../store/store';

import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }) {
  return( 
   <>
      <GlobalStyle />
      <Component {...pageProps} />
     
  </>
  )
}

export default wrapper.withRedux(MyApp);
