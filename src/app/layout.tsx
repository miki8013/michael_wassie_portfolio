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
  metadataBase: new URL('https://michaelwassie.com'),
  title: "Michael Wassie | Full Stack Developer | MERN & Java Expert",
  description: "Portfolio of Michael Wassie, a detail-oriented and adaptable Full Stack Software Developer based in Ethiopia. Specializing in MERN stack, Java, React, Next.js, Node.js, and building scalable web applications with clean architecture and exceptional user experience.",
  keywords: ["Michael Wassie", "Software Developer", "Full Stack Developer", "MERN Stack", "Java Developer", "React Developer", "Next.js", "Node.js", "TypeScript", "Web Developer", "Ethiopia", "Addis Ababa", "Portfolio", "Software Engineer", "Frontend Developer", "Backend Developer"],
  authors: [{ name: "Michael Wassie", url: "https://github.com/miki8013" }],
  creator: "Michael Wassie",
  publisher: "Michael Wassie",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://michaelwassie.com",
    title: "Michael Wassie | Full Stack Developer | MERN & Java Expert",
    description: "Portfolio of Michael Wassie, a detail-oriented and adaptable Full Stack Software Developer based in Ethiopia. Specializing in MERN stack, Java, React, Next.js, Node.js, and building scalable web applications.",
    siteName: "Michael Wassie Portfolio",
    images: [
      {
        url: "/micahelwassielogo.png",
        width: 1200,
        height: 630,
        alt: "Michael Wassie - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Wassie | Full Stack Developer | MERN & Java Expert",
    description: "Portfolio of Michael Wassie, a detail-oriented and adaptable Full Stack Software Developer based in Ethiopia. Specializing in MERN stack, Java, React, Next.js, Node.js.",
    images: ["/micahelwassielogo.png"],
    creator: "@miki8013",
  },
  icons: {
    icon: "/micahelwassielogo.ico",
    shortcut: "/micahelwassielogo.ico",
    apple: "/micahelwassielogo.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://michaelwassie.com",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Michael Wassie",
    "jobTitle": "Full Stack Software Developer",
    "description": "Detail-oriented and adaptable Full Stack Software Developer specializing in MERN stack, Java, React, Next.js, Node.js, and building scalable web applications with clean architecture and exceptional user experience.",
    "url": "https://michaelwassie.com",
    "image": "https://michaelwassie.com/micahelwassielogo.png",
    "sameAs": [
      "https://github.com/miki8013",
      "https://www.linkedin.com/in/michael-wassie-1a779734b",
      "mailto:wassiemiki@gmail.com"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Addis Ababa",
      "addressCountry": "Ethiopia"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Unity University",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Addis Ababa",
        "addressCountry": "Ethiopia"
      }
    },
    "knowsAbout": [
      "MERN Stack",
      "Java",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Tailwind CSS",
      "Redux",
      "Framer Motion",
      "Git",
      "Docker",
      "CI/CD",
      "Full Stack Development",
      "Web Development",
      "Software Engineering"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Bachelor of Science",
      "name": "B.Sc. in Computer Science",
      "educationalLevel": "Bachelor's Degree"
    }
  };

  return (
    <html lang="en" className={`${bungee.variable} ${jakarta.variable} ${unbounded.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
