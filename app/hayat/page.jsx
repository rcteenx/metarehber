import Link from "next/link";

import SocialMedia from "@/components/sections/common/z-social-media";

import { StaticPages } from "@/content/data/siteMetaData";
import { layers } from "@/public/assets/images";

export default function StaticPage() {
  const menu = StaticPages.filter((m) => m.id == 2);

  return (
    <>
      <section className="gradientPrimaryLD md:pb-4">
        <div className="mx-auto container flex flex-col md:flex-row ">
          <div id="pgSticker">
            <h2>Hayat</h2>
            <div className="px-4 pt-2 pb-4 shadow-xl md:max-w-sm gradientPrimaryLD">
              <p>
                İnsan, çok boyutlu bir varlıktır. Farklı seviyelerde bambaşka
                varoluşları vardır. İki insan arasındaki fark, patates ile kedi
                arasındakinden büyük olabilir.
              </p>
              <div className="flex justify-around items-center gap-2">
                <div id="subMenu">
                  <h3>HAYAT</h3>

                  <ul>
                    {menu[0].pages.map((p) => (
                      <li key={p.id}>
                        <Link href={`/${menu[0].link}/${p.link}`}>
                          {p.title}
                        </Link>
                      </li>
                    ))}
                    <li>İzlenimler</li>
                    <li>Enerjiler</li>
                  </ul>
                </div>
                <div className="w-48 flex justify-center">
                  <img src={layers.src} alt="img colletion" className="m-4" />
                </div>
              </div>
            </div>
          </div>
          <div id="pgHeader">
            <h1>HAYAT NEDİR?</h1>
          </div>
        </div>
      </section>
      <SocialMedia />
    </>
  );
}
