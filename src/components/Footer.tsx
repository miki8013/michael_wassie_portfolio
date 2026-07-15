import React from 'react';
import { GraduationCap, Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-10 px-4 sm:py-16 sm:px-6 border-t border-[var(--border-color)] bg-[var(--footer-bg)]">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12">
                    {/* Left — identity + education + languages */}
                    <div className="space-y-5 w-full md:w-auto">
                        <div className="text-base sm:text-lg font-bold flex items-center gap-2">
                            <img src="/micahelwassielogo.png" alt="MW Logo" className="h-7 w-7 sm:h-8 sm:w-8 object-contain" />
                            <span className="text-[var(--text-primary)]">Michael Wassie</span>
                        </div>

                        {/* Education */}
                        <div className="space-y-0.5">
                            <div className="flex items-center gap-2.5">
                                <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center shrink-0">
                                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 flex gap-1 animate-cap-strokes pointer-events-none">
                                        <div className="w-[3px] h-1.5 bg-[var(--accent)] rounded-full -rotate-[25deg] translate-y-0.5" />
                                        <div className="w-[3px] h-2 bg-[var(--accent)] rounded-full -translate-y-0.5" />
                                        <div className="w-[3px] h-1.5 bg-[var(--accent)] rounded-full rotate-[25deg] translate-y-0.5" />
                                    </div>
                                    <GraduationCap size={20} className="sm:size-6 text-[var(--accent)] animate-cap-lift relative z-10" />
                                </div>
                                <p className="text-[var(--text-primary)] font-bold text-xs sm:text-base">B.Sc. in Computer Science</p>
                            </div>
                            <p className="text-[var(--text-secondary)] text-[11px] sm:text-sm pl-[38px] sm:pl-11">Unity University • Graduated with Distinction</p>
                        </div>

                        {/* Languages */}
                        <div className="space-y-1.5">
                            <div className="flex items-center gap-2.5">
                                <Globe size={20} className="sm:size-6 text-[var(--accent)] shrink-0" />
                                <p className="text-[var(--text-primary)] font-bold text-sm sm:text-base">Languages</p>
                            </div>
                            <div className="flex flex-row flex-wrap gap-x-6 gap-y-1 pl-[34px] sm:pl-11">
                                <div className="flex items-baseline gap-1.5">
                                    <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">Amharic</span>
                                    <span className="text-[9px] sm:text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Native</span>
                                </div>
                                <div className="flex items-baseline gap-1.5">
                                    <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">English</span>
                                    <span className="text-[9px] sm:text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Professional</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right — links */}
                    <div className="flex flex-row md:flex-col flex-wrap gap-x-6 gap-y-2 items-start md:items-end">
                        <p className="text-[var(--text-muted)] text-[10px] sm:text-xs uppercase tracking-widest font-semibold w-full">Connect</p>
                        <a
                            href="https://github.com/miki8013"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--text-secondary)] text-xs sm:text-sm hover:text-[var(--accent)] transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href="mailto:wassiemiki@gmail.com"
                            className="text-[var(--text-secondary)] text-xs sm:text-sm hover:text-[var(--accent)] transition-colors"
                        >
                            Email
                        </a>
                        <a
                            href="/michael_wassie_resume.pdf"
                            target="_blank"
                            className="text-[var(--text-secondary)] text-xs sm:text-sm hover:text-[var(--accent)] transition-colors"
                        >
                            Resume
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-8 sm:mt-12 pt-5 sm:pt-8 border-t border-[var(--border-color)] flex flex-col items-center gap-2 text-center">
                    <p className="text-[var(--text-secondary)] text-[10px] sm:text-xs leading-relaxed">
                        Built with Next.js, TypeScript, Tailwind CSS, Framer Motion
                    </p>
                    <p className="text-[var(--text-muted)] text-[10px] sm:text-xs">
                        © {new Date().getFullYear()} Michael Wassie
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;