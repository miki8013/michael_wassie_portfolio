"use client";
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-10 px-6 border-t border-[var(--border-color)]">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    {/* Header */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
                            My Story
                        </h2>
                    </div>

                    <div className="space-y-8">


                        <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed text-lg font-medium">
                            <p>
                                I'm Michael Wassie, a Full Stack Developer based in Ethiopia. My journey in technology 
                                is driven by a curiosity for how things work and a desire to create tools that make a difference.
                            </p>
                            <p>
                                With expertise across the modern web stack, I focus on performance, scalability, 
                                and most importantly, the user experience. Whether it's an e commerce platform or 
                                a creative showcase, I aim for excellence in every line of code.
                            </p>
                        </div>
                    </div>

                    {/* Highlights */}
                    <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-[var(--border-color)]">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-1"
                        >
                            <div className="flex items-center gap-3">
                                <div className="relative w-8 h-8 flex items-center justify-center">
                                    {/* Action strokes (greeting lines) */}
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-1 animate-cap-strokes pointer-events-none">
                                        <div className="w-[3px] h-2 bg-[var(--accent)] rounded-full -rotate-[25deg] translate-y-1" />
                                        <div className="w-[3px] h-2.5 bg-[var(--accent)] rounded-full -translate-y-0.5" />
                                        <div className="w-[3px] h-2 bg-[var(--accent)] rounded-full rotate-[25deg] translate-y-1" />
                                    </div>
                                    <GraduationCap size={24} className="text-[var(--accent)] animate-cap-lift relative z-10" />
                                </div>
                                <p className="text-[var(--text-primary)] font-bold text-xl">B.Sc. in Computer Science</p>
                            </div>
                            <p className="text-[var(--text-secondary)] font-medium">Unity University • GPA 3.55</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="space-y-2"
                        >
                            <div className="flex flex-wrap gap-x-6 gap-y-1">
                                <span className="text-[var(--text-secondary)] font-semibold text-lg hover:text-[var(--accent-secondary)] transition-colors">
                                    Amharic <span className="text-xs font-black text-[var(--text-muted)] ml-2 uppercase">Native</span>
                                </span>
                                <span className="text-[var(--text-secondary)] font-semibold text-lg hover:text-[var(--accent-secondary)] transition-colors">
                                    English <span className="text-xs font-black text-[var(--text-muted)] ml-2 uppercase">Professional</span>
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Status */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="py-2"
                    >
                        <p className="text-[var(--text-secondary)] text-sm font-medium">
                            Currently available for new projects and collaborations.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>

    );
};

export default About;
