import { ReactNode } from "react";
import SideNavbar from "../headers/SideNavbar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SideNavbar />
      {children}
    </>
  );
}
