import React from "react";
import { Sidebar, Header } from "../sections";

export function MainLayout({ children }) {
  return (
    <div className="h-screen flex overflow-hidden">
      <div className="w-[80px] h-screen absolute left-0 top-0 z-10 hidden md:block">
        <Sidebar />
      </div>
      <div className="fixed top-0 w-full z-20 block md:hidden">
        <Header />
      </div>
      <div className="flex-1 ml-[0px] md:ml-[80px] mt-[0px] md:mt-0">
        {children}
      </div>
    </div>
  );
}
