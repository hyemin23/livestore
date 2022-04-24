import axios from "axios";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRef } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  // 공통 함수 매요청마다 내 정보가 들어있는지 확인해주는 함수
  const defaultQueryFn = async () => {
    return await axios.get("/api/users/me").then((res) => res.data);
  };

  const queryClientRef = useRef<QueryClient>();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: defaultQueryFn,
        refetchOnWindowFocus: false,
      },
    },
  });

  if (!queryClientRef.current) {
    queryClientRef.current = queryClient;
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <meta charSet="utf-8" />
          <title>뷰티용</title>
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
