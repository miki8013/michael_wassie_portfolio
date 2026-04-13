"use client";
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-10 px-6 border-t border-[var(--border-color)]">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-6">
                            <div className="space-y-1">

                                <h2 className="main-title text-5xl md:text-7xl lg:text-8xl text-[var(--text-primary)]">
                                    My Story
                                </h2>
                            </div>

                            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed text-lg font-medium">
                                <p>
                                    I'm Michael Wassie, a Full Stack Developer based in Ethiopia. My journey in technology 
                                    is driven by a curiosity for how things work and a desire to create tools that make a difference.
                                </p>
                                <p>
                                    With expertise across the modern web stack, I focus on performance, scalability, 
                                    and most importantly, the user experience. Whether it's an e-commerce platform or 
                                    a creative showcase, I aim for excellence in every line of code.
                                </p>
                            </div>
                        </div>

                        {/* Impact & Languages Section - Unified */}
                        <div className="hidden lg:block space-y-4 pt-12">
                            <div className="border-y border-[var(--border-color)] py-16 flex flex-col items-center">
                                <p className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tighter text-center italic mb-12">
                                    creating real <span className="text-[var(--accent)] not-italic underline decoration-2 underline-offset-8">impact</span> in the digital world.
                                </p>
                                
                                <div className="space-y-4 text-center">
                                    <h3 className="tech-text text-[10px] text-[var(--accent)] uppercase tracking-[0.5em] opacity-80">
                                        Languages
                                    </h3>
                                    <div className="flex flex-wrap justify-center gap-x-10 gap-y-2">
                                        <div className="flex items-baseline gap-3">
                                            <span className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">Amharic</span>
                                            <span className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Native</span>
                                        </div>
                                        <div className="flex items-baseline gap-3">
                                            <span className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">English</span>
                                            <span className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Professional</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Highlights */}
                    <div className="pt-6 border-t border-[var(--border-color)]">
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
                    </div>


                </motion.div>
            </div>
        </section>

    );
};

export default About;
