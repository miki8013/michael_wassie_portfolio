"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const closeMenuAndScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        
        // Wait for menu closure transition, then scroll
        setTimeout(() => {
            const element = document.querySelector(id);
            if (element) {
                const offset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 300); // Wait for the AnimatePresence height transition
    };

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
                            onClick={(e) => closeMenuAndScroll(e, link.href)}
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
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2 flex items-center justify-center text-sky-600 dark:text-sky-400 font-bold rounded-full text-sm bg-sky-50 dark:bg-sky-950/50 border border-sky-200 dark:border-sky-800 transition-all hover:shadow-sm"
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

                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="absolute top-0 left-0 w-full bg-[var(--background)] border border-[var(--border-color)] shadow-2xl p-6 pt-24 md:hidden flex flex-col gap-4 overflow-hidden rounded-[2rem] z-[40]"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => closeMenuAndScroll(e, link.href)}
                                    className="text-lg font-semibold text-[var(--text-secondary)] hover:text-[var(--accent)] py-3 px-4 rounded-xl hover:bg-[var(--accent)]/5 transition-all"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <motion.a
                                href="/michael_wassie_resume.pdf"
                                target="_blank"
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-2 w-full py-4 flex items-center justify-center text-sky-600 dark:text-sky-400 font-bold rounded-[1.5rem] bg-sky-50 dark:bg-sky-950/50 border border-sky-200 dark:border-sky-800 transition-all"
                            >
                                Resume
                            </motion.a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
