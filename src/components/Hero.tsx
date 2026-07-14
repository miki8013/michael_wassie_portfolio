"use client";
import React from 'react';
import { ArrowRight, Github, Mail } from 'lucide-react';

const TICKER_ITEMS = [
  "React", "Next.js", "Node.js", "TypeScript", "MongoDB",
  "PostgreSQL", "Tailwind CSS", "Docker", "Java", "Go",
  "Flutter", "Express", "Redis", "Framer Motion", "Vercel",
];

const Hero = () => {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section className="relative min-h-[70vh] flex flex-col pt-36 md:pt-40 pb-0 overflow-hidden">

      {/* ── Ghost echo titles ── */}
      <span
        aria-hidden
        className="ghost-text hidden lg:block text-[13rem] leading-none top-4 -left-16 absolute select-none"
        style={{ color: 'var(--text-primary)' }}
      >MICHAEL</span>
      <span
        aria-hidden
        className="ghost-text hidden lg:block text-[13rem] leading-none bottom-16 -right-16 absolute select-none"
        style={{ color: 'var(--accent)' }}
      >WASSIE</span>

      {/* ── Main content ── */}
      <div className="container mx-auto max-w-6xl px-6 relative z-10 flex-1">
        <div className="flex flex-col items-center text-center space-y-6">

          {/* Name block */}
          <div className="w-full relative flex flex-col gap-0">
            <div className="self-start -translate-x-2 sm:-translate-x-4 md:-translate-x-20 lg:-translate-x-28">
              <h1 className="hero-name-left main-title text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.85] text-[var(--text-primary)]">
                Michael
              </h1>
            </div>
            <div className="self-end translate-x-2 sm:translate-x-4 md:translate-x-20 lg:translate-x-28">
              <h1 className="hero-name-right main-title text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.85] text-[var(--accent)]">
                Wassie
              </h1>
            </div>
          </div>

          {/* Role */}
          <div className="hero-sub pt-2">
            <p className="tech-text text-base md:text-lg text-[var(--text-secondary)] tracking-[0.5em]">
              Full Stack Developer
            </p>
          </div>

          {/* Bio */}
          <p className="hero-body text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed font-medium">
            I build full-stack web apps, Telegram bots, and payment integrations that solve
            real problems. Most of my work lives in production.
          </p>

          {/* CTAs */}
          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full px-4 sm:px-0">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-secondary)] text-white font-bold rounded flex items-center justify-center gap-3 shadow-lg shadow-[var(--accent)]/25 text-base transition-colors duration-200"
            >
              Explore Work
              <ArrowRight size={18} />
            </a>

            <a
              href="/michael_wassie_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 flex items-center justify-center text-[var(--text-primary)] font-bold rounded text-base bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200"
            >
              Resume
            </a>

            <div className="flex items-center gap-4 pl-0 sm:pl-4 border-l-0 sm:border-l border-[var(--border-color)]">
              <a
                href="https://github.com/miki8013"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] text-[var(--text-secondary)] transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="mailto:wassiemiki@gmail.com"
                className="p-3 rounded bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-red-400 hover:text-red-400 text-[var(--text-secondary)] transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* ── Ticker strip ── */}
      <div
        className="w-full border-t border-b border-[var(--border-color)] py-3 overflow-hidden mt-4"
        aria-hidden
      >
        <div className="ticker-track">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="tech-text text-[var(--text-muted)] px-8 whitespace-nowrap text-xs"
            >
              {item}
              <span className="ml-8 text-[var(--accent)]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
