import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Grain from "@/components/Grain";
import ScrollProgress from "@/components/ScrollProgress";
import { LocaleProvider } from "@/components/LocaleProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "A2PA — Public Affairs & Policy Advisory",
    template: "%s — A2PA",
  },
  description:
    "A2PA is an independent Romanian public affairs and policy advisory firm helping organisations navigate political and regulatory complexity across Romania and the European Union.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ro"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Grain />
        <LocaleProvider>
          <ScrollProgress />
          <Header />
          <main className="page-transition flex-1">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
