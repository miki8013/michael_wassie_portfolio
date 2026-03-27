"use client";
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 bg-[var(--background)]">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="space-y-12"
                >
                    {/* Intro */}
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            <span className="text-[var(--text-muted)] text-xs uppercase tracking-widest font-semibold block mb-3">About</span>
                            <span className="text-[var(--text-primary)]">Who I Am</span>
                        </h2>
                    </div>

                    {/* Story */}
                    <div className="space-y-6 text-lg text-[var(--text-secondary)] leading-relaxed">
                        <p>
                            I am a software developer based in Ethiopia, focused on building efficient and reliable applications. My journey started during my Computer Science degree at Unity University, where I developed a strong foundation in problem solving.
                        </p>
                        <p>
                            I specialize in taking ideas and turning them into functional software. Whether it is architecting a full stack web app or debugging complex systems, I am dedicated to delivering high quality solutions.
                        </p>
                        <p>
                            Currently, I work primarily with the MERN stack to build fast, intuitive applications. I believe that good code must be clean, maintainable, and effective at solving real problems.
                        </p>
                    </div>

                    {/* Quick facts */}
                    <div className="grid md:grid-cols-2 gap-6 pt-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            className="p-6 border-l-4 border-[var(--accent)] bg-[var(--card-bg)] rounded-r-lg"
                        >
                            <h3 className="text-sm uppercase tracking-widest text-[var(--text-muted)] font-bold mb-2">Education</h3>
                            <p className="text-[var(--text-primary)] font-semibold">B.Sc. in Computer Science</p>
                            <p className="text-[var(--text-secondary)] text-sm mt-1">Unity University • GPA 3.55</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            className="p-6 border-l-4 border-[var(--accent-2)] bg-[var(--card-bg)] rounded-r-lg"
                        >
                            <h3 className="text-sm uppercase tracking-widest text-[var(--text-muted)] font-bold mb-2">Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-[var(--border-color)] text-[var(--text-secondary)] rounded-md text-sm border border-[var(--border-color)]">
                                    Amharic <span className="text-xs text-[var(--text-muted)]">(native)</span>
                                </span>
                                <span className="px-3 py-1 bg-[var(--border-color)] text-[var(--text-secondary)] rounded-md text-sm border border-[var(--border-color)]">
                                    English <span className="text-xs text-[var(--text-muted)]">(proficient)</span>
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Availability */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        className="pt-6 flex items-center gap-3"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <p className="text-[var(--text-secondary)] text-sm">
                            Open to full-time roles and freelance opportunities.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
