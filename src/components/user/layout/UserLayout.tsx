import Navbar from "../headers/Navbar";
import { ReactNode } from "react";
import Footer from "../headers/Footer";

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <main className="min-h-screen">
      {children}
      </main>
      <Footer/>
    </main>
  );
}
