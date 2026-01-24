"use client";
import { useTheme } from '@/providers/ThemeProvider';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Moon, Sun, ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[var(--accent)] origin-left z-[100]"
                style={{ scaleX }}
            />

            {/* Theme Toggle & Back to Top Container */}
            <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
                {/* Back to Top Button */}
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: showBackToTop ? 1 : 0, scale: showBackToTop ? 1 : 0.5 }}
                    onClick={scrollToTop}
                    className="p-3 rounded-full bg-[var(--background)] border border-[var(--border-color)] shadow-lg hover:border-[var(--accent)] transition-all group"
                    aria-label="Back to top"
                >
                    <ArrowUp size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--accent)]" />
                </motion.button>

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="p-3 rounded-full bg-[var(--background)] border border-[var(--border-color)] shadow-lg hover:border-[var(--accent)] transition-all group relative overflow-hidden"
                    aria-label="Toggle theme"
                >
                    <div className="relative z-10">
                        {theme === 'dark' ? (
                            <Sun size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--accent)]" />
                        ) : (
                            <Moon size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--accent)]" />
                        )}
                    </div>
                </button>
            </div>
        </>
    );
};

export default ThemeToggle;
