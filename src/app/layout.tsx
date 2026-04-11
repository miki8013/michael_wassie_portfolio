import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

import { Analytics } from "@vercel/analytics/next";

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
    <html lang="en">
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
