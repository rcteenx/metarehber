import Link from "next/link";

import SocialMedia from "@/components/sections/common/z-social-media";

import { StaticPages } from "@/content/data/siteMetaData";
import { logoMT } from "@/public/assets/images";

export default function StaticPage() {
  const menu = StaticPages.filter((m) => m.id == 0);
  return (
    <>
      <section className="gradientPrimaryLD md:pb-4">
        <div className="mx-auto container flex flex-col md:flex-row ">
          <div id="pgSticker">
            <h2>Hakkımızda</h2>
            <div className="px-4 pt-2 pb-4 shadow-xl md:max-w-sm gradientPrimaryLD">
              <p>
                "Meta Rehber" 2024 yılında, Reyhan Çetin ve Arkadaşları ile
                hayata geçen bir platformdur.
              </p>
              <div className="flex justify-around items-center gap-2">
                <div id="subMenu">
                  <h3>HAKKIMIZDA</h3>
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
          <div id="pgHeader">
            <h1>META REHBER NEDİR?</h1>
            <p>
              Meta Rehber, kişinin kendini tanıma ve aşma yolculuğuna destek
              olan alternatif öğreti ve çalışmaları bir arada sunmak amacıyla
              oluşturulmuş bir platformdur.
            </p>
            <p>
              Kahramanın yolculuğu, içsel gelişim, kendini tanıma... vb gibi pek
              çok farklı isim verilen bu yolculuğa, pek çok insan hiç
              başlamıyor, büyük bölümü yolda kalıyor. Ancak çok az kişi yolun
              sonuna doğru ilerleyip, denize kavuşuyor.
            </p>
            <p>
              Bu platformda, elimizden geldiğince yolcular için harita ve destek
              sağlamaya çalışacağız.
            </p>
            <p>
              Aklınıza takılan herhangi bir konuda, destek ya da katkı için bize
              ulaşabilirsiniz.
            </p>
            <p>Sevgilerle...</p>
          </div>
        </div>
      </section>

      <SocialMedia />
    </>
  );
}
