"use client";
import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail, Coffee } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[60vh] flex items-center pt-36 md:pt-40 pb-8 overflow-hidden px-6">
            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    {/* Subtle handwritten tag */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-2"
                    >
                        <span className="handwritten text-xl text-[var(--accent)]">Hello, I'm</span>
                    </motion.div>

                    {/* Name & Title */}
                    <div className="space-y-2">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--text-primary)] leading-none whitespace-nowrap">
                            Michael Wassie
                        </h1>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[var(--text-muted)]">
                            Software Developer
                        </h2>
                    </div>

                    {/* Professional intro */}
                    <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                        Crafting scalable web and mobile applications with a focus on clean architecture, 
                        performance, and exceptional user experience.
                    </p>

                    {/* Tech stack - refined */}
                    <div className="flex flex-wrap gap-2 items-center text-sm pt-2">
                        <span className="text-[var(--text-muted)] text-xs uppercase tracking-widest font-semibold w-full md:w-auto mb-2 md:mb-0 md:mr-1">Tools I Use</span>
                        {["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "MySQL", "Tailwind"].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-[var(--card-bg)] text-[var(--text-secondary)] border border-[var(--border-color)] rounded-full text-xs font-medium transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4 pt-6">
                        <div className="flex items-center gap-3">
                            <motion.a
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.querySelector('#projects');
                                    if (element) {
                                        const offset = 100;
                                        const elementPosition = element.getBoundingClientRect().top;
                                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                                    }
                                }}
                                className="px-6 md:px-8 py-3 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white font-semibold rounded-full transition-all flex items-center gap-2 shadow-lg shadow-[var(--accent)]/20 whitespace-nowrap"
                            >
                                Explore Projects
                                <ArrowRight size={18} />
                            </motion.a>

                            <motion.a
                                href="/michael_wassie_resume.pdf"
                                target="_blank"
                                className="relative inline-flex rounded-full overflow-hidden p-[1px] group whitespace-nowrap"
                            >
                                <span className="absolute inset-[-1000%] animate-spin [animation-duration:2.5s] bg-[conic-gradient(from_90deg_at_50%_50%,var(--border-color)_0%,var(--accent)_50%,var(--border-color)_100%)] opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
                                <span className="inline-flex h-full w-full items-center justify-center rounded-full glass-effect px-5 md:px-6 py-3 text-[var(--text-primary)] font-semibold transition-colors gap-2 relative z-10">
                                    Resume
                                </span>
                            </motion.a>
                        </div>

                        <div className="flex items-center gap-4 ml-0 md:ml-2">
                            <a
                                href="https://github.com/miki8013"
                                target="_blank"
                                className="group relative p-3.5 rounded-full bg-[var(--card-bg)] backdrop-blur-md border border-[var(--border-color)] hover:border-[var(--text-primary)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center overflow-hidden shadow-sm shrink-0"
                                aria-label="GitHub"
                            >
                                <div className="absolute inset-0 bg-[var(--text-primary)] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                <Github size={20} className="relative z-10 text-[var(--text-primary)] group-hover:text-[var(--background)] transition-colors duration-300" />
                            </a>
                            
                            <a
                                href="mailto:wassiemiki@gmail.com"
                                className="group relative p-3.5 rounded-full bg-[var(--card-bg)] backdrop-blur-md border border-[var(--border-color)] hover:border-red-500 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center overflow-hidden shadow-sm shrink-0"
                                aria-label="Email"
                            >
                                <div className="absolute inset-0 bg-red-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                <Mail size={20} className="relative z-10 text-[var(--text-primary)] group-hover:text-white transition-colors duration-300" />
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
