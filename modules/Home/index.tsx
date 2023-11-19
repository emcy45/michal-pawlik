import Head from "next/head";
import { H1, H2 } from "@/components/Primitives/Heading";
import ImageSlider from "./components/SlideShow/ImageSlider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Michał Pawlik</title>
        <meta name="Get to know me!" content="Website about Michał Pawlik" />
      </Head>
      <div className="border-b-2 border-dark-secondary">
        <div className="mb-8 ">
          <H1>Get to know me!</H1>
          <H2>
            This place will be updated with everything I'm currently doing.
          </H2>
        </div>
      </div>

      <ImageSlider interval={8000} />
    </>
  );
}
