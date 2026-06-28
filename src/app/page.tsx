import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Michael Wassie | Full Stack Developer | MERN & Java Expert",
  description: "Portfolio of Michael Wassie, a detail-oriented and adaptable Full Stack Software Developer based in Ethiopia. Specializing in MERN stack, Java, React, Next.js, Node.js, and building scalable web applications with clean architecture and exceptional user experience.",
  keywords: ["Michael Wassie", "Software Developer", "Full Stack Developer", "MERN Stack", "Java Developer", "React Developer", "Next.js", "Node.js", "TypeScript", "Web Developer", "Ethiopia", "Addis Ababa", "Portfolio", "Software Engineer", "Frontend Developer", "Backend Developer"],
  openGraph: {
    title: "Michael Wassie | Full Stack Developer | MERN & Java Expert",
    description: "Portfolio of Michael Wassie, a detail-oriented and adaptable Full Stack Software Developer based in Ethiopia. Specializing in MERN stack, Java, React, Next.js, Node.js, and building scalable web applications.",
    url: "https://michaelwassie.com",
    siteName: "Michael Wassie Portfolio",
    images: [
      {
        url: "/micahelwassielogo.png",
        width: 1200,
        height: 630,
        alt: "Michael Wassie - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Wassie | Full Stack Developer | MERN & Java Expert",
    description: "Portfolio of Michael Wassie, a detail-oriented and adaptable Full Stack Software Developer based in Ethiopia. Specializing in MERN stack, Java, React, Next.js, Node.js.",
    images: ["/micahelwassielogo.png"],
    creator: "@miki8013",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
