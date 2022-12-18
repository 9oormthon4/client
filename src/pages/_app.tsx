import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { wrapper } from '@/store';

declare global {
  interface Window {
    Kakao: any;
  }
}

const queryClient = new QueryClient();

const app = ({ Component, ...rest }: AppProps) => {
  const {store, props} = wrapper.useWrappedStore(rest);

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...props.pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default wrapper.withRedux(app);
