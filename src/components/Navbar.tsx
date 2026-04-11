"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-4 w-full z-50 transition-all duration-500 px-4 md:px-6">
            <div className="container mx-auto max-w-5xl">
                <div className={`flex justify-between items-center transition-all duration-500 bg-[var(--background)] border border-[var(--border-color)] rounded-full ${
                    scrolled 
                    ? 'shadow-xl px-6 md:px-8 py-3' 
                    : 'shadow-sm px-6 md:px-8 py-4'
                }`}>
                <motion.a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xl font-bold hover:scale-105 transition-transform cursor-pointer relative z-50 flex items-center gap-2"
                >
                    <img src="/micahelwassielogo.png" alt="MW Logo" className="h-10 w-10 object-contain" />
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all group-hover:w-full opacity-0 group-hover:opacity-100" />
                        </motion.a>
                    ))}
                    <motion.a
                        href="/michael_wassie_resume.pdf"
                        target="_blank"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2 bg-[var(--accent)] text-white text-sm font-bold rounded-full hover:bg-[var(--accent)]/90 transition-all shadow-lg shadow-[var(--accent)]/20"
                    >
                        Resume
                    </motion.a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden z-50">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 transition-colors hover:bg-[var(--accent)]/10 rounded-full text-[var(--text-primary)]"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="absolute top-0 left-0 w-full bg-[var(--background)] border-b border-[var(--border-color)] shadow-2xl p-6 pt-24 md:hidden flex flex-col gap-4 overflow-hidden"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-semibold text-[var(--text-secondary)] hover:text-[var(--accent)] py-3 px-4 rounded-xl hover:bg-[var(--accent)]/5 transition-all"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/michael_wassie_resume.pdf"
                                target="_blank"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-2 w-full py-4 bg-[var(--accent)] text-white text-center font-bold rounded-2xl transition-all"
                            >
                                View Resume
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
