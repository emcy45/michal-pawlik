import Link from "next/link";
import { FunctionComponent } from "react";

export const MainNavigation: FunctionComponent = () => (
  <>
    <header className="fixed  z-20 top-0 left-0 right-0 backdrop-blur font-normal mx-10 md:mx-20">
      <div className="md:flex items-center justify-between">
        <Link href="/">
          <img
            src="/images/logo.svg"
            className="max-w-full h-auto m-0 p-0"
            alt="Logo"
          />
        </Link>
        <nav className="">
          <ul className="flex justify-between">
            <li className="">
              <Link href="/" className="hover:text-dark-special">
                Home
              </Link>
            </li>
            <li className="md:ml-6">
              <Link href="/about" className="hover:text-dark-special">
                About
              </Link>
            </li>
            <li className="md:ml-6">
              <Link href="/contact" className="hover:text-dark-special">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </>
);
