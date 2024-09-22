import React from "react";
import Footer from "./footer";
import Sidebar from "./sidebar";
import Header from "./header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <div className="w-full flex-grow grid grid-cols-6 gap-1">
        <Sidebar />
        <div className="col-span-5 flex flex-col items-center">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
