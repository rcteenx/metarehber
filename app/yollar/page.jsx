import Link from "next/link";

import SocialMedia from "@/components/sections/common/z-social-media";

import { StaticPages } from "@/content/data/siteMetaData";
import { logoMT } from "@/public/assets/images";

export default function StaticPage() {
  const menu = StaticPages.filter((m) => m.id == 3);
  return (
    <>
      <section className="gradientPrimaryLD md:pb-4">
        <div className="mx-auto container flex flex-col md:flex-row ">
          <div id="pgSticker">
            <h2>Yollar</h2>
            <div className="px-4 pt-2 pb-4 shadow-xl md:max-w-sm gradientPrimaryLD">
              <p>
                "Meta Rehber" 2024 yılında, Reyhan Çetin ve Arkadaşları ile
                hayata geçen bir platformdur.
              </p>
              <div className="flex justify-around items-center gap-2">
                <div id="subMenu">
                  <h3>YOLLAR</h3>
                  <ul>
                    {menu[0].pages.map((p) => (
                      <li key={p.id}>
                        <Link href={`/${menu[0].link}/${p.link}`}>
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-48 flex justify-center">
                  <img src={logoMT.src} alt="img colletion" className="m-4" />
                </div>
              </div>
            </div>
          </div>
          <div id="pgHeader" className="max-w-5xl">
            <h1>UYANMA YOLLARI?</h1>

            <p>Sevgilerle...</p>
          </div>
        </div>
      </section>

      <SocialMedia />
    </>
  );
}
