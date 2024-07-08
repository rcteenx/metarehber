import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageSticker from "@/components/templates/pageSticker";

import Support from "@/components/sections/common/x6-support";
import SocialMedia from "@/components/sections/common/z-social-media";

export default function StaticPage() {
  return (
    <>
      <div className="flex flex-col md:flex-row gradientPrimaryLD md:pb-4">
        <PageSticker h2Title="İnsanın Katmanları">
          <p>
            İnsan, çok boyutlu bir varlıktır. Birbirinden bağımsız farklı
            katmanlardan oluşur. Bilgiğimiz haliyle, tamamlanmamış bir
            varlıktır. Her bir katmanda ayrı ayrı çalışması gerekir.
          </p>
          <ul className="">
            <li>
              <a href="#">
                <span className="w-8 inline-block">H96</span>- Sahte Kişilik
              </a>
            </li>
            <li>
              <a href="#">
                <span className="w-8 inline-block">H48</span>- Doğru Kişilik
              </a>
            </li>
            <li>
              <a href="#">
                <span className="w-8 inline-block">H24</span>- Öz
              </a>
            </li>
            <li>
              <a href="#">
                <span className="w-8 inline-block">H12</span>- Bilinç
              </a>
            </li>
            <li>
              <a href="#">
                <span className="w-8 inline-block">H06</span>- Aşkın Benlik
              </a>
            </li>
            <li>
              <a href="#">
                <span className="w-8 inline-block">H03</span>- Birlik & Bütünlük
              </a>
            </li>
          </ul>
        </PageSticker>
        <div id="pgHeader" className="">
          <h1>İNSAN NEDİR?</h1>
          <p>
            İnsan, çok boyutlu bir varlıktır. Birbirinden bağımsız farklı
            katmanlardan oluşur.
          </p>
        </div>
      </div>
      <Support />
      <SocialMedia />
    </>
  );
}
