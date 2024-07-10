"use client";

import { useState } from "react";
import Link from "next/link";

import { siteMetadata, StaticPages } from "@/content/data/siteMetaData";

import IconComponent from "@/components/ui/IconComponent";
import { footerReyhan } from "@/public/assets/images";

export default function Header() {
  const [menuIcon, setIcon] = useState(false);
  const handleSmallerScreensNavigation = () => {
    setIcon(!menuIcon);
  };
  const handleSmallerScreensNavigationClose = () => {
    setIcon(false);
  };
  // && m.id > 0
  const menu = StaticPages.filter((m) => m.id < 4);
  const menu2 = StaticPages.filter((m) => m.id < 100);
  return (
    <header className="h-12 shadow-lg">
      <div className="mx-auto md:container px-4 lg:px-0 py-2 flex items-center justify-between">
        <div className=" w-24 md:w-48 z-50 flex items-center justify-start  h-8 ">
          <h3 className="m-0 p-0 text-sm md:text-2xl">
            <Link
              id="platform"
              onClick={handleSmallerScreensNavigationClose}
              href="/"
            >
              {siteMetadata.logo}
            </Link>
          </h3>
        </div>
        <nav className="fixed px-4 border border-solid rounded-full font-light text-xs md:text-base bg-opacity-40 top-2 right-1/2 translate-x-1/2 bg-light/60 backdrop-blur-sm z-50 bg-white flex justify-center items-center h-8">
          <ul className="flex justify-center items-center gap-2">
            {menu.map((p) => (
              <li
                key={p.id}
                className={`border-b border-b-white hover:border-b-primary  `}
              >
                {/* ${ id === p.id ? "text-primary" : "" } */}
                <Link
                  onClick={handleSmallerScreensNavigationClose}
                  href={`/${p.link}`}
                >
                  {p.title.toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div
          onClick={handleSmallerScreensNavigation}
          className="w-24 md:w-48 z-50 flex justify-end"
        >
          {menuIcon ? (
            <IconComponent name="menuClose" size={24} color="FF0000" />
          ) : (
            <IconComponent name="menu" size={24} color="333366" />
          )}
        </div>

        <div
          className={` inset-0 flex justify-center items-center w-full gradientPrimaryLD ease-out duration-300 z-30 ${
            menuIcon ? "left-0 fixed" : "fixed left-[-100%] "
          }`}
        >
          {/* Smaller screen navbar */}
          <div className="py-4">
            <ul className="mx-auto w-96 text-2xl text-center text-primary-light-3">
              {menu2.map((p) => (
                <li key={p.id} className={`py-2 `}>
                  <Link
                    onClick={handleSmallerScreensNavigation}
                    href={`/${p.link}`}
                    className=" hover:text-accent cursor-pointer border-b border-primary-light-2"
                  >
                    {p.title.toLocaleUpperCase("TR")}
                  </Link>

                  <ul className="flex flex-wrap justify-center items-center gap-2 ">
                    {p.pages.map((p2) => (
                      <li key={p2.id} className="text-sm">
                        <Link
                          onClick={handleSmallerScreensNavigation}
                          href={`/${p.link}/${p2.link}`}
                          className=" hover:text-accent cursor-pointer border-b border-primary-light-2"
                        >
                          {p2.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <div className="flex flex-col justify-center items-center mt-8 text-primary-dark-3">
              <a href="/reyhan">
                <img
                  src={footerReyhan.src}
                  alt="reyhan çetin"
                  title="reyhan çetin"
                  className="m-0 p-2 h-28 w-28 border-2 border-primary-light-1 rounded-full gradientTransition"
                />
              </a>
              <h3 className="font-normal">Hoşgeldiniz</h3>
              <p>Sizin için ne yapabiliriz?</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
