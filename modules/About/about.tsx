import { H1, H2 } from "@/components/Primitives/Heading";
import { Paragraph } from "@/components/Primitives/Paragraph";
import Head from "next/head";
import Image from "next/image";
import type { FunctionComponent } from "react";

const ImageStyles = {
  borderRadius: "16px",
  margin: "20px",
};

export const About: FunctionComponent = () => (
  <>
    <Head>
      <title>About Me - Michał Pawlik</title>
    </Head>
    <H1>About me</H1>
    <H2>
      Hi, my name is Michal and I'm from Wroclaw, Poland. I'm glad you found
      yourself here. I will introduce myself in a few words.
    </H2>
    <div className=" flex gap-14 items-center justify-between">
      <div className="flex flex-col">
        <Paragraph>
          In 2022 I graduated engineering studies at the Wrocław University of
          Science and Technology in the faculty of Civil Engineering,
          specialisation: Construction Engineering. Since 2019, I have been
          working as an assistant designer in a construction company (part-time
          during my studies)
        </Paragraph>
        <Paragraph>
          Last year I became interested in developing and I'm learning it in my
          spare time. I treat it as a hobby, however, I would like to take my
          first steps in the IT industry.
        </Paragraph>
        <Paragraph>
          I like to spend my free time in an active way, for example walking in
          the mountains, cycling, playing squash or at the gym. In addition, I'm
          interested in football, motorsport and gaming.
        </Paragraph>
      </div>

      <Image
        alt="profile photo"
        src="/images/profilowe1.jpg"
        style={ImageStyles}
        width={300}
        height={300}
      />
    </div>
  </>
);
