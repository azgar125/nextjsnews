import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import { ThemeProvider } from "./context/ThemeContext";

export const roboto = Roboto({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daily Global News - Latest  Breaking News , Headlines and updates",
  description:
    "Stay updated with Daily Global News. Get breaking news, politics, business, sports, entertainment, technology, and world updates – all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} antialiased`}
      >
        <ThemeProvider>
          <Header />
          {children}
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
