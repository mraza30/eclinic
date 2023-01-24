import React, { ReactNode } from "react";

import UserHeader from "../components/headers/User";

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="relative m-auto min-h-screen max-w-screen-2xl">
        <UserHeader />
        {children}
      </main>
    </>
  );
}
