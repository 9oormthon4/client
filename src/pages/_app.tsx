import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect } from 'react';

declare global {
  interface Window {
    Kakao: any;
  }
}

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
     window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
