"use client";
import { motion } from 'framer-motion';
import { Mail, Github, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 bg-[var(--background)]">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center space-y-8"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                            <span className="text-[var(--text-muted)] text-xs uppercase tracking-widest font-semibold block mb-3">Contact</span>
                            <span className="text-[var(--text-primary)]">Get in Touch</span>
                        </h2>
                        <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
                            Available for freelance projects and full-time positions. Feel free to reach out.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                        <motion.a
                            href="mailto:wassiemiki@gmail.com"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white font-semibold rounded-lg transition-all flex items-center gap-3 shadow-lg shadow-[var(--accent)]/20"
                        >
                            <Mail size={20} />
                            Send an Email
                        </motion.a>

                        <motion.a
                            href="https://github.com/miki8013"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 bg-[var(--card-bg)] hover:bg-[var(--border-color)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-semibold rounded-lg transition-all flex items-center gap-3"
                        >
                            <Github size={20} />
                            View GitHub
                        </motion.a>

                        <motion.a
                            href="https://linkedin.com/in/micheal-wassie"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 bg-[var(--card-bg)] hover:bg-[var(--border-color)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-semibold rounded-lg transition-all flex items-center gap-3"
                        >
                            <Linkedin size={20} />
                            LinkedIn
                        </motion.a>
                    </div>

                    {/* Info */}
                    <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-[var(--text-muted)]">
                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>Addis Ababa, Ethiopia</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>+251 983 755 378</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
