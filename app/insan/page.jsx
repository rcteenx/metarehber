import Link from "next/link";

import SocialMedia from "@/components/sections/common/z-social-media";

import { StaticPages } from "@/content/data/siteMetaData";
import { layers } from "@/public/assets/images";

export default function StaticPage() {
  const menu = StaticPages.filter((m) => m.id == 1);
  return (
    <>
      <section className="gradientPrimaryLD md:pb-4">
        <div className="mx-auto container flex flex-col md:flex-row ">
          <div id="pgSticker">
            <h2>İnsanın Katmanları</h2>
            <div className="px-4 pt-2 pb-4 shadow-xl md:max-w-sm gradientPrimaryLD">
              <p>
                Ezoterik bilgilere göre, insan çok boyutlu bir varlıktır: İç içe
                geçmiş ve bağımsız farklı katmanlardan oluşur.
              </p>
              <div className="flex justify-around items-center gap-2">
                <div id="subMenu">
                  <h3>İNSAN</h3>
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
                  <img src={layers.src} alt="img colletion" className="m-4" />
                </div>
              </div>
            </div>
          </div>
          <div id="pgHeader">
            <h1>İNSAN NEDİR?</h1>
            <p>Bilgiğimiz haliyle, tamamlanmamış bir varlıktır.</p>
          </div>
        </div>
      </section>
      <SocialMedia />
    </>
  );
}
