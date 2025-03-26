import "./global.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Libre_Baskerville } from "next/font/google";
import { Navbar } from "./components/nav";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Next.js Portfolio Starter",
    template: "%s | Next.js Portfolio Starter",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "My Portfolio",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
const baskerville = Libre_Baskerville({
  variable: "--font-baskerville",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-[#363636] bg-white dark:text-[#ededed] dark:bg-[#141414]",
        geistSans.variable,
        geistMono.variable,
        baskerville.variable
      )}
    >
      <body className="antialiased mx-4 md:mx-10">
        <main className="flex-auto min-w-0 flex flex-col font-[family-name:var(--font-geist-sans)]">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
