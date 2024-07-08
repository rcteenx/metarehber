import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageSticker from "@/components/templates/pageSticker";

import Support from "@/components/sections/common/x6-support";
import SocialMedia from "@/components/sections/common/z-social-media";

export default function StaticPage() {
  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <PageSticker h2Title="Hayat Nedir?">
          <p>
            İnsan, çok boyutlu bir varlıktır. Farklı seviyelerde bambaşka
            varoluşları vardır. İki insan arasındaki fark, patates ile kedi
            arasındakinden büyük olabilir.
          </p>
          <h3>Hayatın Farklı Açılımları</h3>
          <ul>
            <li>İzlenimler</li>
            <li>Enerjiler</li>
          </ul>
        </PageSticker>
        <div id="pgHeader">Selam</div>
      </div>
      <Support />
      <SocialMedia />
    </>
  );
}
