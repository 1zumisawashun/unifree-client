import "@/assets/styles/generics/custom-reset.css";
import "@/assets/styles/generics/the-new-css-reset.css";
import { Header } from "@/components/layouts/Header";
import { apiUrl } from "@/functions/constants/api";
import { ClientProvider } from "@/providers/client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Noto_Sans_JP } from "next/font/google";
// import { GoogleAnalytics } from '@next/third-parties/google'

const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: true,
});

export const metadata = {
  title: "UniFli",
  metadataBase: new URL(apiUrl),
  description:
    "必要なものを必要な人へ、あなたの要らないが誰かの役に立つ。UniFliは北海道大学生のための教科書フリマアプリです。",
  openGraph: {},
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={NotoSansJP.className}>
        <ClientProvider>
          <Header />
          {children}
          {/* https://vercel.com/1zumisawashun/unifree-client/speed-insights */}
          <SpeedInsights />
          {/* https://vercel.com/1zumisawashun/unifree-client/analytics */}
          <Analytics />
          {/* https://nextjs.org/docs/messages/next-script-for-ga */}
          {/* <GoogleAnalytics gaId="G-XYZ" /> */}
        </ClientProvider>
      </body>
    </html>
  );
}
