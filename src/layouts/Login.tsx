import React, { ReactNode } from 'react';

export function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex min-h-screen w-full justify-between font-inter">
        <div className="hidden min-h-screen w-5/12 bg-neutral-900 md:block">
          {/* Image */}
        </div>
        <div className="flex w-full items-center justify-center py-16 md:w-7/12">
          {children}
        </div>
      </div>
    </>
  );
}
