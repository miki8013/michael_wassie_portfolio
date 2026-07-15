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
        setTimeout(() => {
            const element = document.querySelector(id);
            if (element) {
                const offset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }, 300);
    };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About',    href: '#about'    },
        { name: 'Skills',   href: '#skills'   },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact',  href: '#contact'  },
    ];

    return (
        <nav className="fixed top-4 w-full z-50 px-4 md:px-6">
            <div className="container mx-auto max-w-5xl">
                {/* Bar */}
                <div className={`flex justify-between items-center transition-all duration-300 rounded-xl border border-white/10 dark:border-white/10 light:border-black/8 ${
                    scrolled ? 'px-6 md:px-8 py-3' : 'px-6 md:px-8 py-4'
                }`}
                style={{
                    background: 'color-mix(in srgb, var(--background) 45%, transparent)',
                    backdropFilter: 'blur(24px) saturate(140%) brightness(0.95)',
                    WebkitBackdropFilter: 'blur(24px) saturate(140%) brightness(0.95)',
                    boxShadow: '0 4px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.08)',
                    border: '1px solid color-mix(in srgb, var(--foreground) 10%, transparent)',
                }}>
                    <motion.a
                        href="#"
                        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <img src="/micahelwassielogo.png" alt="MW Logo" className="h-10 w-10 object-contain" />
                    </motion.a>

                    {/* Desktop links */}
                    <div className="hidden md:flex gap-8 items-center">
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => closeMenuAndScroll(e, link.href)}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                className="nav-link text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <motion.a
                            href="/michael_wassie_resume.pdf"
                            target="_blank"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-5 py-2 text-[var(--accent)] font-bold rounded text-sm border border-[var(--accent)]/40 hover:border-[var(--accent)] transition-colors"
                            style={{
                                background: 'rgba(16, 185, 129, 0.08)',
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                            }}
                        >
                            Resume
                        </motion.a>
                    </div>

                    {/* Mobile toggle */}
                    <div className="md:hidden z-50">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 hover:bg-[var(--accent)]/10 rounded text-[var(--text-primary)] transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="absolute top-0 left-0 w-full shadow-2xl p-6 pt-24 md:hidden flex flex-col gap-2 overflow-hidden rounded-xl z-[40]"
                            style={{
                                background: 'color-mix(in srgb, var(--background) 55%, transparent)',
                                backdropFilter: 'blur(32px) saturate(150%) brightness(0.97)',
                                WebkitBackdropFilter: 'blur(32px) saturate(150%) brightness(0.97)',
                                border: '1px solid color-mix(in srgb, var(--foreground) 10%, transparent)',
                            }}
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => closeMenuAndScroll(e, link.href)}
                                    className="text-lg font-semibold text-[var(--text-secondary)] hover:text-[var(--accent)] py-3 px-4 rounded hover:bg-[var(--accent)]/5 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <motion.a
                                href="/michael_wassie_resume.pdf"
                                target="_blank"
                                whileTap={{ scale: 0.97 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-2 w-full py-4 flex items-center justify-center text-[var(--accent)] font-bold rounded border border-[var(--accent)]/40 hover:border-[var(--accent)] transition-colors"
                                style={{
                                    background: 'rgba(16, 185, 129, 0.08)',
                                }}
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
