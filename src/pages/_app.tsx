import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { wrapper } from '@/store';

declare global {
  interface Window {
    Kakao: any;
  }
}

const queryClient = new QueryClient();

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(app);