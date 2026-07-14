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
            My Story
          </h2>

          <div className="space-y-5 text-[var(--text-secondary)] leading-relaxed text-lg font-medium">
            <p>
              I'm Michael Wassie, a Full Stack Developer based in Ethiopia. My journey in
              technology is driven by curiosity for how things work and a desire to create
              tools that make a real difference.
            </p>
            <p>
              With expertise across the modern web stack, I focus on performance,
              scalability, and most importantly, the user experience. Whether it's an
              e-commerce platform or a creative showcase, I aim for excellence in every
              line of code.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-8 mt-12 pt-10 border-t border-[var(--border-color)]">
            {[
              { value: "5+", label: "Projects Shipped" },
              { value: "3+", label: "Years Building" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="main-title text-4xl md:text-5xl text-[var(--accent)]">{stat.value}</p>
                <p className="tech-text text-[10px] text-[var(--text-muted)] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
