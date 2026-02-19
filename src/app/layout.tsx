import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/main.sass";
import Banner from "./components/UI/Banner";
// import FooterSection from "./components/UI/footer/footerSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yusef Turin",
  description:
    "Yusef Turin's personal portfolio website showcasing projects, skills, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Banner />
        <main>{children}</main>
      </body>
    </html>
  );
}
