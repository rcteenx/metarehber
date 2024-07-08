import Link from "next/link";

import PageSticker from "@/components/templates/pageSticker";
import SocialMedia from "@/components/sections/common/z-social-media";

import { StaticPages } from "@/content/data/siteMetaData";
import { layers } from "@/public/assets/images";

export default function StaticPage() {
  const menu = StaticPages.filter((m) => m.id == 1);
  return (
    <>
      <div className="flex flex-col md:flex-row gradientPrimaryLD md:pb-4">
        <PageSticker h2Title="İnsanın Katmanları">
          <p>
            Ezoterik bilgilere göre, insan çok boyutlu bir varlıktır: İç içe
            geçmiş ve bağımsız farklı katmanlardan oluşur.
          </p>
          <div className="flex justify-around items-center gap-2">
            <ul>
              {menu[0].pages.map((p) => (
                <li key={p.id}>
                  <Link href={`/${menu[0].link}/${p.link}`}>{p.title}</Link>
                </li>
              ))}
            </ul>
            <img src={layers.src} alt="img colletion" className="m-4" />
          </div>
        </PageSticker>
        <div id="pgHeader" className="">
          <h1>İNSAN NEDİR?</h1>
          <p>Bilgiğimiz haliyle, tamamlanmamış bir varlıktır.</p>
        </div>
      </div>
      <SocialMedia />
    </>
  );
}
