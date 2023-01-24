import React, { ReactNode } from "react";

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex min-h-screen w-full justify-between font-inter">
        <div className="hidden min-h-screen w-5/12 bg-neutral-900 md:block"></div>
        <div className={"flex w-full items-center justify-center md:w-7/12"}>
          {children}
        </div>
      </div>
    </>
  );
}
