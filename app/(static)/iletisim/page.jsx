import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";

import Support from "@/components/sections/home/x6-support";
import SocialMedia from "@/components/sections/common/z-social-media";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>İletişim</HeaderTitle>
      <HeaderImage bgImage="iMerhaba">Bize Ulaşın</HeaderImage>

      <PageContent h2Title="İletişim Bilgileri">
        <p>Bize aşağıdaki kanallardan ulaşabilirsiniz.</p>
        <ul>
          <li>
            <dd className="font-semibold">Whatsapp & Telefon:</dd>
            <dt>
              <a href="tel:+905443087402">+90 (544) 308 74 02</a>
            </dt>
          </li>
          <li className="mt-4">
            <dd className="font-semibold">Email:</dd>
            <dt>
              <a href="mailto:rhan.cetinx@gmail.com">rhan.cetinx@gmail.com</a>
            </dt>
          </li>
        </ul>
        <p>Sevgilerle...</p>
        <div id="mc_embed_shell" className="border p-4">
          <div id="mc_embed_signup">
            <form
              action="https://reyhancetin.us13.list-manage.com/subscribe/post?u=4e14d027bae9d27df6700b35d&amp;id=6a82733c5b&amp;f_id=009864e2f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_self"
            >
              <div id="mc_embed_signup_scroll">
                <h3>Mail Listemize Üye Olun</h3>

                <div className="sm:flex  justify-center items-center">
                  <input
                    type="email"
                    name="EMAIL"
                    id="mce-EMAIL"
                    required="required"
                    placeholder="Email adresiniz"
                    aria-label="Email address"
                    className="w-full px-4 py-2 text-base leading-6 transition duration-150 ease-in-out border-2 rounded-md appearance-none focus:outline-none sm:max-w-xs border-gray-200 placeholder-gray-500 text-indigo  focus:placeholder-gray-400 bg-white"
                  />
                  <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <input
                      type="submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      value="Subscribe"
                      className="block px-4 py-2 text-white/80 transition duration-100 ease-in-out bg-indigo border border-transparent rounded shadow-sm gradientIndigo focus:border-indigo focus:ring-2 focus:ring-indigo focus:outline-none focus:ring-opacity-50"
                    ></input>
                  </div>
                </div>
              </div>
            </form>
            <p className="mt-3 text-sm leading-5 text-gray-500 hidden">
              <a
                href="http://eepurl.com/iTflO-"
                title="Mailchimp - email marketing made easy and fun"
              >
                <span>
                  <img
                    src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                    alt="Intuit Mailchimp"
                    className="w-48"
                  />
                </span>
              </a>
            </p>
          </div>
        </div>
      </PageContent>

      <Support />
      <SocialMedia />
    </>
  );
}
