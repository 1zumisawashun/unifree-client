import "@/assets/styles/generics/custom-reset.css";
import "@/assets/styles/generics/the-new-css-reset.css";
import { Header } from "@/components/layouts/Header";
import { ClientProvider } from "@/providers/client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Noto_Sans_JP } from "next/font/google";

const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: true,
});

const apiUrl =
  process.env["NEXT_PUBLIC_API_BASE_URL"] || "http://localhost:3000";

export const metadata = {
  title: "UniFli",
  metadataBase: new URL(apiUrl),
  description:
    "必要なものを必要な人へ、あなたの要らないが誰かの役に立つ。UniFliは北海道大学生のための教科書フリマアプリです。",
  openGraph: {
    title: "Title webtsite",
    description: "this is the desciption",
  },
  twitter: {
    card: "summary_large_image",
    site: "@eMartiiin94",
    title: "Title webtsite",
    description: "this is the desciption",
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
        </ClientProvider>
      </body>
    </html>
  );
}
