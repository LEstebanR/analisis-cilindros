import React from "react";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex gap-1 w-full">
        <Sidebar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
