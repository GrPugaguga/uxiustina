import type { Metadata } from "next";
import {Raleway } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import { PrivacyAndCookies } from "@/ui-kit";

const raleway = Raleway({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Iustina D / UX/UI",
  description: "Привет! Я Юстина, UX/UI дизайнер. Решаю комплексные задачи через пользовательские исследования, аналитику и системный подход в проектировании",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <Script id="yandex-metrika" strategy="afterInteractive">{`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106793022', 'ym');
          ym(106793022, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
        `}</Script>
        <noscript>
          <div><img src="https://mc.yandex.ru/watch/106793022" style={{position:'absolute', left:'-9999px'}} alt="" /></div>
        </noscript>
      </head>
      <body
        className={`${raleway.variable} antialiased font-raleway p-0  `}
      >
        <div className="fixed top-0 sm:top-10 left-0 right-0 m-0 z-50 flex justify-center">
          <Header />
        </div>
        <div id="main-content" className="flex align-middle justify-center max-w-360 sm:m-auto px-5 sm:px-25">
          {children}
        </div>
        <div className="mb-4 flex justify-center">
          <PrivacyAndCookies />
        </div>
      </body>
    </html>
  );
}
