import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect } from 'react';
import { wrapper } from '@/store';

declare global {
  interface Window {
    Kakao: any;
  }
}

const app = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(app);