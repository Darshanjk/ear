export const metadata = {
  title: "OtoScopeAI | A Healthcare App",
  description: "Welcome to OtoScopeAI",
  openGraph: {
    title: "OtoScopeAI | A Healthcare App",
    description: "Welcome to OtoScopeAI",
    url: "https://otitis-media-detection.vercel.app",
    siteName: "OtoScopeAI",
    images: [
      {
        url: "https://otitis-media-detection.vercel.app/OtoScopeAI-A-Healthcare-App.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

import "./globals.css";
import { Poppins } from "next/font/google";
import RecoilProvider from "./recoil";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <RecoilProvider>{children}</RecoilProvider>
      </body>
    </html>
  );
}
