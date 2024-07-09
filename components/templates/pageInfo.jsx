import Link from "next/link";

import { pageInfo } from "@/content/data/pageInfo";
import { StaticPages } from "@/content/data/siteMetaData";

import IconComponent from "@/components/ui/IconComponent";

export default function PageInfo({ id }) {
  const menu = StaticPages.filter((m) => m.id == id);
  const pg = pageInfo.filter((p) => p.id == id)[0];
  return (
    <section className=" md:pb-4">
      <div className="mx-auto container flex flex-col md:flex-row ">
        <div id="pgSticker">
          <h2>{pg.h2}</h2>
          <div className="px-4 pt-2 pb-4 shadow-xl md:max-w-sm ">
            <p>{pg.p}</p>
            <div className="flex justify-around items-center gap-2">
              <div id="subMenu">
                <h3>{menu[0].title.toLocaleUpperCase("TR")}</h3>
                <ul>
                  {menu[0].pages.map((p) => (
                    <li key={p.id}>
                      <Link href={`/${menu[0].link}/${p.link}`}>{p.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-48 flex justify-center">
                <IconComponent
                  name={pg.icon}
                  size={96}
                  color="#333366"
                  alt={pg.h2}
                  title={pg.h3}
                />
                {/* <img src={logoMT.src} alt="img colletion" className="m-4" /> */}
              </div>
            </div>
          </div>
        </div>
        <div id="pgHeader">
          <h1>{pg.h1}</h1>
          {pg.par.map((px, index) => (
            <p key={index}>{px}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
