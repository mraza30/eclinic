import React, { ReactNode } from 'react';

import { StandardHeader } from '../components/headers/Standard';

export function StandardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="relative m-auto min-h-screen w-full max-w-screen-2xl">
        <StandardHeader />
        {children}
      </main>
    </>
  );
}
