import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { wrapper } from '@/store';
import { Provider } from 'react-redux';

declare global {
  interface Window {
    Kakao: any;
  }
}

const queryClient = new QueryClient();

const app = ({ Component, ...rest }: AppProps) => {
  const {store, props} = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Component {...props.pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
};

export default app;
