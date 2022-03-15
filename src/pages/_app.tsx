import type { AppProps } from "next/app";
import Head from "next/head";
import { useRef } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <meta charSet="utf-8" />
          <title>찍구</title>
        </Head>

        <div className="w-full max-w-lg mx-auto font-myfont">
          <Component {...pageProps} />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
