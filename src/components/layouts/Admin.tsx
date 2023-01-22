import React, { ReactNode } from "react";

import AdminHeader from "../headers/Admin";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="m-auto min-h-screen max-w-screen-2xl">
        <AdminHeader />
        {children}
      </main>
    </>
  );
}
