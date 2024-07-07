export const siteMetadata = {
  title: "Meta Rehber -  Ezoterik Felsefe Araştırma ve Uygulama Topluluğu",
  author: "rcteenx",
  headerTitle: "Meta Rehber | Ezoterik Felsefe Araştırma ve Uygulama Topluluğu",
  description: "Meta Rehber Ezoterik Felsefe Araştırma ve Uygulama Topluluğu",
  language: "tr-TR",
  siteUrl: "https://metarehber.org.tr/",
  siteLogo: "/logo-rc.png",
  email: "metarehber@gmail.com",
};

export const StaticPages = [
  {
    id: 1,
    title: "Meta Rehber",
    link: "meta-rehber",
    pages: [{ id: 1, title: "Hakkımızda", link: "hakkimizda" }],
  },
  {
    id: 2,
    title: "Meta",
    link: "meta",
    pages: [
      { id: 1, title: "Bilinç Yolu", link: "bilinc" },
      {
        id: 2,
        title: "Farkındalık Yolu",
        link: "farkindalik",
      },
    ],
  },
  {
    id: 3,
    title: "Rehber",
    link: "rehber",
    pages: [
      { id: 1, title: "Giriş Atölyesi", link: "atolye" },
      // {
      //   id: 2,
      //   title: "Tanıtım Semineri",
      //   link: "seminer",
      // },
    ],
  },
  {
    id: 9,
    title: "İletişim",
    link: "iletisim",
    pages: [
      {
        id: 1,
        title: "rhan.cetinx@gmail.com",
        link: "mailto:rhan.cetinx@gmail.com",
      },
      { id: 2, title: "+90 (544) 308 74 02", link: "tel:+905443087402" },
      { id: 3, title: "Çerez Politikası", link: "cerez" },
      { id: 4, title: "K.V.K.K.", link: "kvkk" },
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    svgIcon: "facebook",
    name: "facebook",
    alt: "facebook logo",
    title: "facebook sayfamıza bekleriz",
    link: "https://www.facebook.com/reyhancetinve",
  },
  {
    id: 2,
    svgIcon: "instagram",
    name: "instagram",
    alt: "instagram logo",
    title: "instagram sayfamıza bekleriz",
    link: "https://www.instagram.com/reyhancetinve",
  },
];
