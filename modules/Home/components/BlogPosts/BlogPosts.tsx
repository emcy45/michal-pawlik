import { H1, H2 } from "@/components/Primitives/Heading";
import Head from "next/head";
import { FunctionComponent } from "react";

export const BlogPosts: FunctionComponent = () => (
  <>
    <Head>
      <title>Blog Posts</title>
    </Head>

    <H1>Blog Posts</H1>
    <H2>Below are posts I created as part of learning programming.</H2>
  </>
);
