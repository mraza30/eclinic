import '@/styles/globals.css';

import type { AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { api } from '@/utils/api';
import { StandardLayout } from '@/layouts/Standard';

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
