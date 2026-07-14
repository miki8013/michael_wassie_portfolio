"use client";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 border-t border-[var(--border-color)]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="accent-line mb-4" />
          <h2 className="main-title text-5xl md:text-7xl lg:text-8xl text-[var(--text-primary)] mb-10">
            About
          </h2>

          <div className="space-y-5 text-[var(--text-secondary)] leading-relaxed text-lg font-medium">
            <p>
              I'm Michael Wassie, a full-stack developer. I've always been the kind of
              person who needs to know how things work under the hood, not just that they
              work. That curiosity is what got me into software and it's still what drives
              most of what I build.
            </p>
            <p>
              I don't believe in unsolvable problems. Complex or not, if you look hard
              enough and dig deep enough, there's always a way through. That's how I
              approach every project, whether it's a tricky API integration or an
              architecture decision that doesn't have an obvious right answer.
            </p>
            <p>
              What I build tends to be practical. Telegram bots, WhatsApp ordering flows,
              payment integrations, admin dashboards.
              I bring my own take to modern tooling and I'm always finding ways to make
              the work sharper and the output cleaner.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
