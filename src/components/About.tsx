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
                        <div className="space-y-6 lg:col-span-2 text-center max-w-4xl mx-auto">
                            <div className="space-y-1">

                                <h2 className="main-title text-5xl md:text-7xl lg:text-8xl text-[var(--text-primary)]">
                                    My Story
                                </h2>
                            </div>

                            <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed text-lg font-medium">
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
                    </div>


                </motion.div>
            </div>
        </section>

    );
};

export default About;
