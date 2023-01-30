import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import type { AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { api } from '@/utils/api';
import { config } from '@fortawesome/fontawesome-svg-core';
import { StandardLayout } from '@/layouts/Standard';

config.autoAddCss = false;

const MyApp: AppType<{ session: Session }> = ({ Component, pageProps }) => {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <StandardLayout>
          <Component {...pageProps} />
        </StandardLayout>
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
