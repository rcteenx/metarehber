import PageInfo from "@/components/templates/pageInfo";
import BlueContent from "@/components/templates/blueContent";
import SocialMedia from "@/components/sections/common/z-social-media";

export default function StaticPage() {
  return (
    <>
      <PageInfo id="2" />
      <BlueContent h1Title="Hayatın Farklı Açılımları">
        

        <p>
          Hayat, ilk olarak benlik sınırlarımızın dışında kalan ve algıladığımız
          tüm dış dünya olarak ele alınabilir. Çoğumuz için sınır, kendi
          bedenidir, bazıları sınır olarak çekirdek ailesini belirmiş olabilir;
          zor durumlarda ve kişinin kendi bedeni üzerinde kontrolü
          sınırlanmışsa, içerde çok daha derin bir yerde sınır çizilmiş
          olabilir.
        </p>
        <p>
          Kendimizce, az çok iç dünyamızda bir denge ve düzen oluşturuyoruz,
          ancak hayat..
        </p>
      </BlueContent>

      <SocialMedia />
    </>
  );
}
