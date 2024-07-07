import { siteMetadata } from "@/content/data/siteMetaData";

import { barInfo } from "@/content/data";
import { rVideo } from "@/public/assets/images";

import Hero from "@/components/sections/home/1-hero";

import SocialMedia from "@/components/sections/common/z-social-media";

export async function generateMetadata() {
  return {
    title: siteMetadata.title + " - Meta Rehber",
  };
}

export default function Home() {
  return (
    <>
      <Hero rVideo={rVideo} />

      <SocialMedia />
    </>
  );
}
