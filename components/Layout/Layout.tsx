import { Footer } from "../Footer";
import { MainNavigation } from "../MainNavigation/MainNavigation";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen  bg-dark-primary text-dark-text cursor-text">
    <MainNavigation />
    <main className="my-6 mx-10 flex-grow">{children}</main>
    <Footer />
  </div>
);

export default Layout;
