import { contHero, StaticPages } from "@/content/data";

import IconComponent from "@/components/ui/IconComponent";
const Hero = ({ rVideo }) => {
  return (
    <section
      id="hero"
      className="md:container mx-auto xl:my-8 flex flex-col xl:flex-row justify-center gap-0 "
    >
      <div className="xl:w-1/2 xl:pr-2 text-center xl:text-left">
        <h2 className="mb-4 font-light text-center xl:text-left text-2xl lg:text-4xl xl:text-primary">
          <span className="border-b border-indigo xl:border-primary">
            {contHero.h2a}
          </span>
          <br />
          <span className="font-normal text-xs md:text-sm lg:text-xl">
            {contHero.h2b}
          </span>
        </h2>
        <h1 className="mt-8 mb-0 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-indigo">
          <span className="px-4 xl:pr-12  xl:-ml-4 xl:bg-white xl:whitespace-nowrap relative z-10 xl:rounded-r-full shadow-lg ">
            {contHero.h1a}
          </span>
          <br />
          <span className="text-primary inline-block my-4 xl:my-8">
            {contHero.h1b}
          </span>
        </h1>
        <p className="my-0 px-4 md:px-0 text-xs md:text-lg text-indigo-gray">
          {contHero.desc}
        </p>
        <div className="flex my-8 flex-row space-x-8 justify-center ">
          <div className="relative inline-flex group">
            <div className="absolute transitiona-all duration-1000 opacity-80 -inset-px gradientPurpleToBlack rounded-2xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="https://wa.me/905443087402?text=at%C3%B6lye%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F%0A"
              title="WhatsApp Mesajı Gönderin"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200  font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 gradientIndigo gradientTransition btn-hero"
              role="button"
            >
              {contHero.btn1}
              <IconComponent name="arrowright" size={18} color="white" />
            </a>
          </div>
          <a
            href={
              "/" + StaticPages[2].link + "/" + StaticPages[2].pages[0].link
            }
            className="btn-hero font-semibold text-lg border-0 hover:text-indigo-light-3"
          >
            <span>{contHero.btn2}</span>
          </a>
        </div>
      </div>
      <div className="mx-auto px-4 md:py-8 flex flex-col justify-end">
        <div className="p-4 shadow-xl rounded-b-xl">
          <img
            src={rVideo.src}
            alt="img colletion"
            width="w-full"
            height={400}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
