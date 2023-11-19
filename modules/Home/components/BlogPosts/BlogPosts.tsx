import { H1, H2, H3 } from "@/components/Primitives/Heading";
import { Paragraph } from "@/components/Primitives/Paragraph";
import {
  ArrowDownFromLine,
  ArrowDownToLine,
  ArrowUpFromLine,
  Map,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  caption: string;
  mapLink: string;
  src: string;
  text1: string;
  text2: string;
}

const blogPost = [
  {
    id: 1,
    title: "Home of Speedway",
    caption: "Wrocław - Olympic Stadium",
    mapLink:
      "https://www.google.com/maps/place/Stadion+Olimpijski/@51.1189777,17.0596168,14z/data=!3m1!4b1!4m6!3m5!1s0x470fc56b824ebd5d:0xc9e3a8a290cbfb6f!8m2!3d51.1189835!4d17.0965246!16s%2Fg%2F11fjnb2zz9?entry=ttu",
    src: "/images/slide5.jpg",
    text1:
      "Speedway racing, a high-octane motorsport that originated in the early 20th century, has evolved into an adrenaline-pumping spectacle that captivates audiences around the world. Characterized by powerful bikes, daring maneuvers, and the thunderous roar of engines, speedway racing is not only a sport but a thrilling experience that combines skill, strategy, and pure speed.",
    text2:
      "Speedway has established itself as a global sport with various leagues and competitions, each showcasing the best riders from around the world. Prominent leagues include the Speedway Grand Prix series, featuring elite riders competing in multiple countries, and domestic leagues such as the Polish Speedway Ekstraliga and the British Elite League. These competitions not only showcase exceptional racing but also contribute to the development and promotion of the sport.",
  },
];

const ImageStyles = {
  borderRadius: "16px",
  margin: "10px 0px",
};

export const BlogPosts: FunctionComponent = () => {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const toggleExpand = (postId: number) => {
    setExpandedIds((prevExpandedIds) =>
      prevExpandedIds.includes(postId)
        ? prevExpandedIds.filter((id) => id !== postId)
        : [...prevExpandedIds, postId]
    );
  };

  return (
    <>
      <Head>
        <title>Blog Posts</title>
      </Head>

      <H1>Blog Posts</H1>
      <H2>Below are posts I created as part of learning programming.</H2>

      <div className="">
        {blogPost.map((post) => (
          <div key={post.id}>
            <div className="z-10 mt-5">
              <H3>{post.title}</H3>
            </div>
            <div className="flex justify-center">
              <Image
                alt={post.caption}
                src={post.src}
                width={500}
                height={500}
                style={ImageStyles}
              />
            </div>
            <div className="flex flex-row justify-center gap-2">
              <Map />
              <div className="text-center hover:text-dark-special">
                <Link href={post.mapLink} legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    {post.caption}
                  </a>
                </Link>
              </div>
            </div>
            <p
              className="whitespace-pre-wrap my-4 text-justify"
              onClick={() => toggleExpand(post.id)}
            >
              {expandedIds.includes(post.id)
                ? post.text1 + " " + post.text2
                : post.text1.substring(0, 300) + "... "}
            </p>
            {expandedIds.includes(post.id) ? (
              <div
                onClick={() => toggleExpand(post.id)}
                className="text-dark-special flex justify-center"
              >
                <ArrowUpFromLine className="" />
              </div>
            ) : (
              <div
                onClick={() => toggleExpand(post.id)}
                className="text-dark-special flex justify-center"
              >
                <ArrowDownFromLine />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
