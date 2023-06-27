import MainNavigation from "../MainNavigation/MainNavigation";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <main>{children}</main>
      <footer className="bg-gray-200 text-center p-4">
        Stopka tekst tekst tekst
      </footer>
    </div>
  );
};

export default Layout;
