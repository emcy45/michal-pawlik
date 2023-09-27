import Link from "next/link";
import { FunctionComponent } from "react";

export const MainNavigation: FunctionComponent = () => (
  <>
    <header className="fixed flex items-center z-20 top-0 left-0 right-0 px-8 backdrop-blur font-normal justify-between">
      <Link href="/">
        <img src="/images/logo.svg" className="max-w-xs m-0 p-0" />
      </Link>
      <nav>
        <ul className="flex">
          <li className="ml-6">
            <Link href="/" className="hover:text-dark-special">
              Home
            </Link>
          </li>
          <li className="ml-6">
            <Link href="/about" className="hover:text-dark-special">
              About
            </Link>
          </li>
          <li className="ml-6">
            <Link href="/contact" className="hover:text-dark-special">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  </>
);
