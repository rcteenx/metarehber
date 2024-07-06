import Link from "next/link";

export default function SubPages({ subPage, id, sid }) {
  return (
    <section className="p-4 md:py-8">
      <div className="container-p pt-12">
        <h3 className="text-xl md:text-2xl font-bold text-center">
          İLGİLİ SAYFALAR
        </h3>
        <div className="mt-4">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
            {subPage.pages.map((pg) => (
              <li key={pg.id}>
                <Link
                  className={` w-64 border px-12 py-4 md:py-8 text-center transition ease-in  block  
                ${id == pg.id ? "bg-gray-100" : "hover:bg-gray-100"} `}
                  href={"/" + subPage.link + "/" + pg.link}
                >
                  {pg.title}
                </Link>
                {/* {pg.pages && (
                  <ul>
                    {pg.pages.map((x) => (
                      <li key={x.id}>
                        <Link
                          className={` border-b p-2 text-center transition ease-in  block  
${sid == x.id ? "bg-gray-100" : "hover:bg-gray-200"} `}
                          href={
                            "/" + subPage.link + "/" + pg.link + "/" + x.link
                          }
                        >
                          {x.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )} */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
