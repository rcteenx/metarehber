export default function Faq() {
  return (
    <section className=" border-b border-gray-200 faq--content" id="faq">
      <div className="mx-auto container py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <h2 className="text-center font-bold tracking-tight text-gray-900 text-[26px]">
          SIKÇA SORULAN SORULAR
        </h2>
        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
          <div className="pt-6 question">
            <dt className="text-lg">
              <button
                type="button"
                className="flex w-full items-start justify-between text-left text-gray-400"
                aria-controls="faq-0"
                aria-expanded="false"
              >
                <h3 className="font-medium text-gray-900">
                  Sunucu (Server) Nedir?{" "}
                </h3>
                <span className="ml-6 flex h-7 items-center">
                  <svg
                    className="h-6 w-6 transform transition-all rotate-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </span>
              </button>
            </dt>
            <dd
              className="mt-2 pr-12 answer [&amp;>ul]:list-disc [&amp;>ul]:list-inside"
              id="faq-0"
            >
              <p>
                Sunucu ve İstemci,internet ağlarının temel bileşenleridir.
                Sunucu,internet ortamındaki merkezi bir kaynağa veya hizmete
                istemciler tarafından gerçekleştirilen erişimleri yöneten ve
                onlara hizmet veren bir bilgisayar veya bilgisayar programıdır.
                Bir web sitesine girmek isteyen bilgisayar istemci,web
                sitesindeki içerikleri ağda yayınlayan bilgisayar ise sunucu
                olarak tanımlanabilir.
              </p>
            </dd>
          </div>
          <div className="pt-6 question">
            <dt className="text-lg">
              <button
                type="button"
                className="flex w-full items-start justify-between text-left text-gray-400"
                aria-controls="faq-0"
                aria-expanded="false"
              >
                <h3 className="font-medium text-gray-900">
                  Sunucu kiralama nedir?{" "}
                </h3>
                <span className="ml-6 flex h-7 items-center">
                  <svg
                    className="rotate-0 h-6 w-6 transform transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </span>
              </button>
            </dt>
            <dd
              className="mt-2 pr-12 hidden answer [&amp;>ul]:list-disc [&amp;>ul]:list-inside"
              id="faq-0"
            >
              <p>
                Sunucu kiralama;bir hosting sağlayıcısı tarafından sunulan ve
                aylık ücret karşılığında sanal veya fiziksel sunuculara web
                sitesi,veri tabanı ya da e-posta sistemi barındırma gibi
                amaçlarla uzaktan erişim sağlayan BT hizmetidir. Sunucu
                donanımının kurulması ve bakımının
                yapılması,enerji,soğutma,yedeklilik,altyapının 7 gün 24 saat
                yönetimi gibi bileşenler hosting sağlayıcısının
                sorumluluğundadır.{" "}
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
