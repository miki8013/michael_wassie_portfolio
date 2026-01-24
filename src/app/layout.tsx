import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Micheal Wassie | Full Stack Developer",
  description: "Portfolio of Micheal Wassie, a Detail oriented and adaptable Full Stack Software Developer specializing in MERN and Java.",
  keywords: ["Micheal Wassie", "Software Developer", "Full Stack", "MERN", "Java", "Portfolio"],
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
        </ThemeProvider>
      </body>
    </html>
  );
}
