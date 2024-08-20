import MainNav from "@/components/mainNav";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className=" bg-gray-100 dark:bg-gray-900">
        <MainNav />
      </div>
      {children}
    </>
  );
};

export default Layout;
