import Link from "next/link";

import PageSticker from "@/components/templates/pageSticker";
import SocialMedia from "@/components/sections/common/z-social-media";

import { StaticPages } from "@/content/data/siteMetaData";
import { logoMT } from "@/public/assets/images";

export default function StaticPage() {
  const menu = StaticPages.filter((m) => m.id == 0);
  return (
    <>
      <div className="flex flex-col md:flex-row gradientPrimaryLD md:pb-4">
        <PageSticker h2Title="Hakkımızda">
          <p>
            "Meta Rehber" 2024 yılında, Reyhan Çetin ve Arkadaşları ile hayata
            geçen bir platformdur.
          </p>
          <div className="flex justify-around items-center gap-2">
            <ol className=" list-decimal">
              {menu[0].pages.map((p) => (
                <li key={p.id}>
                  <Link href={`/${menu[0].link}/${p.link}`}>{p.title}</Link>
                </li>
              ))}
            </ol>
            <img src={logoMT.src} alt="img colletion" className="m-4" />
          </div>
        </PageSticker>
        <div id="pgHeader" className="max-w-5xl">
          <h1>META REHBER NEDİR?</h1>
          <p>
            Meta Rehber, kişinin kendini tanıma ve aşma yolculuğuna destek olan
            alternatif öğreti ve çalışmaları bir arada sunmak amacıyla
            oluşturulmuş bir platformdur.
          </p>
          <p>
            Kahramanın yolculuğu, içsel gelişim, kendini tanıma... vb gibi pek
            çok farklı isim verilen bu yolculuğa, pek çok insan hiç başlamıyor,
            büyük bölümü yolda kalıyor. Ancak çok az kişi yolun sonuna doğru
            ilerleyip, denize kavuşuyor.
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

      <SocialMedia />
    </>
  );
}
