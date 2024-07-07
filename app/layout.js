import "./globals.css";

import { Inter } from "next/font/google";

// import GoogleAnalytics from "@/components/GoogleAnalytics";

import { siteMetadata } from "@/content/data/siteMetaData";

import Header from "@/components/ui/Header";
import Footer from "@/components/ui/footer/0-index";

const base = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-base",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: siteMetadata.title,
    template: "%s | " + siteMetadata.title,
  },
  description: siteMetadata.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang={siteMetadata.language} className={`${base.variable} `}>
      <body className="relative">
        {/* <GoogleAnalytics /> */}

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
