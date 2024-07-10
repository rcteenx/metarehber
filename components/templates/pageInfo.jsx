import Link from "next/link";

import { StaticPages } from "@/content/data/siteMetaData";

import IconComponent from "@/components/ui/IconComponent";

export default function PageInfo({ id }) {
  const menu = StaticPages.filter((m) => m.id == id);
  return (
    <section className=" md:pb-4">
      <div className="mx-auto container flex flex-col md:flex-row">
        <div id="pgSticker">
          <h2>{menu[0].titleLong}</h2>
          <div className="px-4 pb-2 md:max-w-sm shadow-xl">
            <div>
              <p>{menu[0].description}</p>
              <div className="flex justify-around items-center gap-0">
                {/* <div id="subMenu">
                  <ul>
                    {menu[0].pages.map((p) => (
                      <li key={p.id}>
                        <Link href={`/${menu[0].link}/${p.link}`}>
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div> */}
                <div className="w-48 flex justify-center">
                  <IconComponent
                    name={menu[0].icon}
                    size={80}
                    color="#333366"
                    alt={menu[0].title}
                    title={menu[0].titleLong}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="pgHeader">
          <h1>{menu[0].h1}</h1>
          {menu[0].par.map((px, index) => (
            <p key={index}>{px}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
