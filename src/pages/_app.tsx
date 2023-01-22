import "@/styles/globals.css";

import type { ReactElement, ReactNode } from "react";

import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { api } from "@/utils/api";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

//@ts-ignore
export default api.withTRPC(MyApp);
