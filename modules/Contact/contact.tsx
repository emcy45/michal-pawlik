import { H1, H2 } from "@/components/Primitives/Heading";
import Head from "next/head";
import { FunctionComponent } from "react";
import ExpandAnswer from "./components/ExpandAnswer";
import { Linkedin, LinkedinIcon, Mail, Phone, PhoneIcon } from "lucide-react";

import Link from "next/link";

const username = "m.pawlik45";
const domain = "gmail.com";
const emailLink = `${username}@${domain}`;

export const Contact: FunctionComponent = () => (
  <>
    <Head>
      <title>Contact - Michał Pawlik</title>
    </Head>

    <H1>Contact me!</H1>
    <H2>
      Feel free to contact me in any way and let's start creating something new!
    </H2>
    <div>
      <ul className="flex my-4 gap-2">
        <PhoneIcon className="" />
        <ExpandAnswer
          expandText="Phone"
          collapseText="Phone"
          content="+48 537 918 042"
        />
      </ul>
      <ul className="flex flex-row gap-2">
        <Mail />
        <ExpandAnswer
          expandText="E-mail"
          collapseText="E-mail"
          content={emailLink}
        />
      </ul>
      <ul className="flex flex-row my-4 gap-2">
        <LinkedinIcon />
        <Link
          href="https://www.linkedin.com/in/micha%C5%82-pawlik-262037188/"
          target="_blank"
          className=" hover:text-dark-special flex flex-row "
        >
          Linkedin
        </Link>
      </ul>
    </div>
  </>
);
