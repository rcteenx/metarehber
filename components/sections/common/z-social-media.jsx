import IconComponent from "@/components/ui/IconComponent";

import { socialMedia } from "@/content/data";

export default function SocialMedia() {
  return (
    <section className="mx-auto my-16 lg:my-24">
      <div className="px-8 text-center">
        <h2 className="mx-auto border-b-2 inline-block">SOSYAL MEDYA</h2>

        <h3 className="text-2xl lg:text-4xl">
          İçsel yolculuğumuzu paylaşmak için "
          <span className="font-bold text-indigo-dark-5">sosyal medya</span>"
          dayız!
        </h3>
        <h4 className="mt-4 text-base md:text-xl text-indigo-light-5">
          Karşılıklı etkileşim için sosyal medya sayfalarımıza bekliyoruz.
        </h4>
        <div className="grid grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto px-8">
          {socialMedia.map((i) => (
            <div key={i.id}>
              <a
                href={i.link}
                className="group flex sm:block items-center justify-center gap-8 hover:bg-white p-10 hover:shadow-[3px_4px_20px_0_rgba(0,0,0,.15)] rounded transition-all text-center gradientTransition"
                target="_blank"
              >
                <div className="flex justify-center h-14 items-center">
                  <IconComponent
                    name={i.svgIcon}
                    size={96}
                    color="#333366"
                    alt={i.alt}
                    title={i.alt}
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
