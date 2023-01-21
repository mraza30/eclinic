import { api } from "@/utils/api";
import { type AppType } from "next/app";

import "@/styles/globals.css";
import RootLayout from "@/components/layout/RootLayout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return( 
    <>
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
    </>
  );
};

export default api.withTRPC(MyApp);
