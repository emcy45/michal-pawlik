import Head from "next/head";
import type { FunctionComponent } from "react";

export const About: FunctionComponent = () => (
  <>
    <Head>
      <title>About Me - Michał Pawlik</title>
    </Head>

    <div>
      <h1 className="my-4">Nagłówek 1</h1>
      <h2 className="bg-gray-200 text-center p-4">Nagłówek 2</h2>
      <p>Zawartość strony: About Me Page</p>
    </div>
  </>
);
