import React, { ReactNode } from 'react';

import Image from 'next/image';

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex min-h-screen w-full justify-between font-inter">
        <div className="hidden min-h-screen w-5/12 bg-sky-400 md:flex md:items-center md:justify-center">
          <Image
            className="h-72 w-auto lg:h-96"
            src="/authImage.png"
            width="500"
            height="500"
            alt="Auth Layout Image Of Computer"
          />
        </div>
        <div className="flex w-full flex-col items-center pt-36 pb-20 md:w-7/12">
          {children}
        </div>
      </div>
    </>
  );
}
