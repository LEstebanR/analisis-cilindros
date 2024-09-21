import React from "react";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex gap-1">
        <Sidebar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
