import '../global.css';

import * as React from 'react';

import Providers from '@components/Providers';

function MyApp({ Component, pageProps }: any) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp;
