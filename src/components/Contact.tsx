"use client";
import { motion } from 'framer-motion';
import { Mail, Github, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-10 px-6">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-6"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
                            Let's Build Something Together
                        </h2>
                        <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto leading-relaxed">
                            I'm currently open to new opportunities and collaborations. 
                            Whether you have a question or just want to say hi, my inbox is always open.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                        <motion.a
                            href="mailto:wassiemiki@gmail.com"
                            className="w-full sm:w-auto px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white font-bold rounded-full transition-all flex items-center justify-center gap-3 shadow-lg shadow-[var(--accent)]/20"
                        >
                            <Mail size={18} />
                            Send an Email
                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/michael-wassie-1a779734b"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 glass-effect text-[var(--text-primary)] font-bold rounded-full transition-all flex items-center justify-center gap-3"
                        >
                            <Linkedin size={18} />
                            LinkedIn
                        </motion.a>
                    </div>

                    {/* Information Grid */}
                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 pt-10">
                        <div className="flex items-center gap-3">
                            <MapPin size={18} className="text-[var(--accent)]" />
                            <div className="text-left">
                                <p className="text-sm font-bold text-[var(--text-primary)]">Addis Ababa, Ethiopia</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail size={18} className="text-[var(--accent)]" />
                            <div className="text-left">
                                <a href="mailto:wassiemiki@gmail.com" className="text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">wassiemiki@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Github size={18} className="text-[var(--accent)]" />
                            <div className="text-left">
                                <a href="https://github.com/miki8013" target="_blank" className="text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">@miki8013</a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>

    );
};

export default Contact;
