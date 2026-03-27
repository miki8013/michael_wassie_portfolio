"use client";
import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail, Coffee } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden px-6">
            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    {/* Handwritten note */}
                    <motion.div
                        initial={{ opacity: 0, rotate: -2 }}
                        whileInView={{ opacity: 1, rotate: -1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.3 }}
                        className="handwritten text-xl md:text-2xl text-[var(--text-muted)] mb-4"
                    >
                        <span className="inline-block transform -rotate-1">hey there I'm</span>
                    </motion.div>

                    {/* Name */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] md:leading-none">
                        <span className="block text-[var(--text-primary)]">Micheal Wassie</span>
                        <span className="block mt-2 relative inline-block">
                            <motion.span
                                initial={{ width: "0%" }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
                                className="absolute inset-0 bg-[var(--accent-2)]/40 -z-10 h-full"
                                style={{ transformOrigin: "left" }}
                            />
                            <span className="text-[var(--text-primary)] font-black px-2 relative z-10">software developer</span>
                        </span>
                    </h1>

                    {/* Casual intro */}
                    <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                        I build things for the web. Currently focused on creating full-stack applications that people actually want to use.
                    </p>

                    {/* Tech stack - professional */}
                    <div className="flex flex-wrap gap-2 items-center text-sm pt-2">
                        <span className="text-[var(--text-muted)] text-xs uppercase tracking-widest font-semibold w-full md:w-auto mb-2 md:mb-0 md:mr-1">Core Stack</span>
                        {["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "MySQL", "Tailwind", "Capacitor"].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-[var(--card-bg)] text-[var(--text-secondary)] border border-[var(--border-color)] rounded-sm text-xs font-medium tracking-wide hover:border-[var(--accent)]/60 hover:text-[var(--text-primary)] transition-all duration-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4 pt-6">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.02, rotate: -1 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-3 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white font-bold rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-[var(--accent)]/20"
                        >
                            check out my work
                            <ArrowRight size={18} />
                        </motion.a>

                        <motion.a
                            href="/michael_wassie_resume.pdf"
                            target="_blank"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-primary)] font-bold rounded-lg transition-all hover:border-[var(--accent)] flex items-center gap-2"
                        >
                            <span className="relative flex h-2 w-2 mr-1">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Resume
                        </motion.a>

                        <div className="flex items-center gap-3">
                            <a
                                href="https://github.com/miki8013"
                                target="_blank"
                                className="p-3 bg-[var(--card-bg)] hover:bg-[var(--border-color)] rounded-lg border border-[var(--border-color)] transition-all text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="mailto:wassiemiki@gmail.com"
                                className="p-3 bg-[var(--card-bg)] hover:bg-[var(--border-color)] rounded-lg border border-[var(--border-color)] transition-all text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Removed Status Indicator */}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
