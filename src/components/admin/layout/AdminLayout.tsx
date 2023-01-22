import { ReactNode } from "react";
import SideNavbar from "../../admin/headers/Sidebar";
import Navbar from "../../admin/headers/Navbar";
import Footer from "@/components/admin/headers/Footer";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
     <div className="flex relative min-h-screen" >
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500  flex-none w-64 ">
        <SideNavbar/>
      </div>
      <div className="bg-pink-500 flex-initial w-screen"> 
        <Navbar/>
        <main className="min-h-screen">
          {children}
        </main>
        <Footer/>
      </div>
    </div>
    </>
  );
}
