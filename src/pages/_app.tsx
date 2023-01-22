import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import type { ReactElement, ReactNode } from "react";

import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { api } from "@/utils/api";
import { config } from "@fortawesome/fontawesome-svg-core";
import { isWidthSmAtom } from "@/store/responsive";
import { useHydrateAtoms } from "jotai/utils";

config.autoAddCss = false;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const { initialState } = pageProps;
  useHydrateAtoms(initialState ? [[isWidthSmAtom, initialState]] : []);

  const getLayout =
    Component.getLayout ??
    ((page) => {
      page;
    });
  return getLayout(<Component {...pageProps} />);
}

//@ts-ignore
export default api.withTRPC(MyApp);
