import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import { Bungee, Plus_Jakarta_Sans, Unbounded } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Michael Wassie | Full Stack Developer",
  description: "Portfolio of Michael Wassie, a Detail oriented and adaptable Full Stack Software Developer specializing in MERN and Java.",
  keywords: ["Michael Wassie", "Software Developer", "Full Stack", "MERN", "Java", "Portfolio"],
  icons: {
    icon: "/micahelwassielogo.ico",
    apple: "/micahelwassielogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bungee.variable} ${jakarta.variable} ${unbounded.variable}`}>
      <body>
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          <ThemeToggle />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
