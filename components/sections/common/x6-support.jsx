export default function Support() {
  return (
    <section className="md:my-16 py-16 px-5 sm:px-0 bg-purple-300 bg-center bg-cover bg-no-repeat relative ">
      <div className="container mx-auto relative z-10 text-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative grid-cols-2 lg:grid-cols-1 text-center lg:text-left">
            <div className="text-3xl lg:text-4xl mb-5 max-w-sm mx-auto lg:mx-0">
              Destek için <br />
              <span className="font-bold">şimdi ve burada!</span>
              <br />
              bekliyoruz :)
            </div>
            <p className="text-lg w-3/4 mx-auto lg:mx-0">
              Kişisel yolculuğunuzla ilgili kafanıza takılan herhangi bir
              sorgulamada bize ulaşabilirsiniz
            </p>
            <a
              href="https://wa.me/905443087402?text=at%C3%B6lye%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F%0A"
              className="mt-5 lg:mt-0 live-help-button lg:w-44 lg:h-44 rounded-full shadow-xl font-semibold uppercase lg:text-2xl gradientPrimaryLD lg:border-white lg:border-4 text-black inline-flex lg:flex items-center justify-center text-center lg:absolute lg:-right-16 lg:top-1/2 lg:-translate-y-1/2 py-2 px-4 lg:py-0 lg:px-0 group"
            >
              <span className="absolute bg-accent/40 top-0 left-0 right-0 bottom-0 rounded-full scale-110 transition-all duration-300 animate-ping delay-300 z-10 hidden lg:block"></span>
              <span className="absolute bg-accent/40 top-0 left-0 right-0 bottom-0 rounded-full scale-150 hidden lg:block transition-all z-20 animate-ping duration-500 delay-500"></span>
              <span className="absolute bg-accent/40 top-0 left-0 right-0 bottom-0 rounded-full scale-200 hidden lg:block transition-all z-20 animate-ping duration-1000 delay-1000"></span>
              <span className="absolute top-0 left-0 right-0 bottom-0 rounded-full scale-[1.35] hidden lg:block transition-all z-30 border border-white/50 group-hover:border-white/50"></span>
              <span className="relative z-30 text-white">MESAJ GÖNDER</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
