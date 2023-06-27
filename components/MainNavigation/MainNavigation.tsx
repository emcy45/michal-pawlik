import Link from "next/link";
import classes from "./MainNavigation.module.css";
import { FunctionComponent } from "react";

export const MainNavigation: FunctionComponent = () => (
  <>
    <header className={classes.header}>
      <a href="/">
        <img src="/random-logo.png" alt="Michał Pawlik" />
      </a>

      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  </>
);
