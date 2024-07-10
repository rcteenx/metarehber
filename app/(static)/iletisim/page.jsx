import Link from "next/link";

import PageInfo from "@/components/templates/pageInfo";
import Support from "@/components/sections/common/x6-support";
import SocialMedia from "@/components/sections/common/z-social-media";

export default function StaticPage() {
  return (
    <>
      <PageInfo id="9" />

      <Support />
      <SocialMedia />
    </>
  );
}
