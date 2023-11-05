import { Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Copyright } from "./components/Copyright";
import { DateTimeDisplay } from "./components/DateTime";
import Spotify from "@/components/Footer/components/Spotify";

export const Footer: FunctionComponent = () => (
  <footer className="mt-auto bg-dark-secondary">
    <div className="mx-10">
      <Spotify />
      <div className="flex flex-row justify-between items-center p-2">
        <DateTimeDisplay />
        <div>
          <ul className="flex flex-row gap-4">
            <li>
              <Link href="https://github.com/emcy45" target="_blank">
                <Github className="hover:text-[#6B778D]" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/micha%C5%82-pawlik-262037188/"
                target="_blank"
              >
                <Linkedin className="hover:text-[#3282B8]" />
              </Link>
            </li>

            <li>
              <Link href="https://www.instagram.com/emcy45/" target="_blank">
                <Instagram className="hover:text-[#E14594]" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Copyright />
    </div>
  </footer>
);
