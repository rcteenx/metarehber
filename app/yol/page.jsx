import PageInfo from "@/components/templates/pageInfo";
import BlueContent from "@/components/templates/blueContent";
import SocialMedia from "@/components/sections/common/z-social-media";

export default function StaticPage() {
  return (
    <>
      <PageInfo id="3" />
      <BlueContent h1Title="Farklı Yolların Kısa Tarihi">
        <p>
          Hem iç dünyamızda hem de dış dünyada bir yerlere gitmek istiyoruz;
          ancak bunu isteyen ne ilk ne de son kişiyiz. Bizden çok önceleri
          benzer isteklerle yolculuğa başlamış ve sonrakiler için yollar ve
          öğretiler oluşturmuş pek çok kişi var. Farklı kategoriler altında
          sınıflayacağımız bu yollar, az çok benzer yolcuğu işaret ediyor.
        </p>
        <h3>Dini Yollar</h3>
        <p>
          Tarih sonrası, yani yazının bulunmasından sonra, ortaya çıkan ilk
          yollar, dini bir kimliğe sahip. Hatta pek çok açıdan iç içe geçtiği
          için, dinden ayırmaya çalışmak, etle-tırnağı ayırmak kadar zor.
        </p>
        <p>
          Ancak o dönemlerde sadece yol çalışmaları değil, ahlak, kanunlar hatta
          bilim bile dinin içinde.
        </p>
        <h3>Ezoterik Yollar</h3>
        <p>
          İlk dönemlerde din ve felsefenin içinde olan pek çok alan, zamanla
          ayrılmaya başladı. Dini liderlerin yanında, yargıçlar (kadılar),
          öğretmenler ve pek çok yeni alan ortaya çıktı.
        </p>
        <p>
          İlk başta her şeyi kapsayan dini öğretiler, zamanla dış dünyaya fazla
          odaklandığında, içsel yolculuğu öne çıkaran alt öğretiler ortaya
          çıkmaya başladı. Hristiyan mistikleri, sufiler ve Kabala öğretilerini,
          büyük kitleden ayrı içsel bir yolculuğa çıkmış bir grup insanın
          macerası olarak görebiliriz.
        </p>
        <h3>Bilimsel Yollar</h3>
        <p>
          Geçen yüzyılın başında, başta Freud ve Jung'ın yolculuğu ile bilim
          dünyası da bu maceraya kendi sınırları içinde katıldı ve çok önemli
          katkılar yaptı.
        </p>
        <p>
          Bilim rasyonel sınırları nedeniyle, yolu bir yerde bırakmak zorunda
          kalıyor. Gözlemlenebilir, ölçülebilir gerçekliğin ötesine geçmediği ve
          geçemeyeceği için, yeni gerçekliklere alan bıraktı.
        </p>
        <h3>Post Modern Yollar</h3>
        <p>
          Klasik yollardan ve bilimsel yollardan kaynaklanan boşluğu, post
          modern açılımlar doldurmaya başladı.
        </p>
        <p>
          Ramana Maharshi, George Gurdjieff, Jiddu Krishnamurti, Allan Watts,
          Carlos Castaneda, Osho, Eckhart Tolle gibi geçen yüzyılın dikkate
          değer kişileri, meta dünyadaki yolculuğu bir miktar aydınlatmış oldu.
        </p>
      </BlueContent>

      <SocialMedia />
    </>
  );
}
