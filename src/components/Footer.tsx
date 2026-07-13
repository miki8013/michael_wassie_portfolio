import React from 'react';
import { GraduationCap, Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-16 px-6 border-t border-[var(--border-color)] bg-[var(--footer-bg)]">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 text-center md:text-left">
                    <div className="flex-1 space-y-6">
                        <div className="text-lg font-bold flex items-center gap-2 justify-center md:justify-start">
                            <img src="/micahelwassielogo.png" alt="MW Logo" className="h-8 w-8 object-contain" />
                            <span className="text-[var(--text-primary)]">Michael Wassie</span>
                        </div>

                        {/* Education */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <div className="relative w-8 h-8 flex items-center justify-center">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-1 animate-cap-strokes pointer-events-none">
                                        <div className="w-[3px] h-2 bg-[var(--accent)] rounded-full -rotate-[25deg] translate-y-1" />
                                        <div className="w-[3px] h-2.5 bg-[var(--accent)] rounded-full -translate-y-0.5" />
                                        <div className="w-[3px] h-2 bg-[var(--accent)] rounded-full rotate-[25deg] translate-y-1" />
                                    </div>
                                    <GraduationCap size={24} className="text-[var(--accent)] animate-cap-lift relative z-10" />
                                </div>
                                <p className="text-[var(--text-primary)] font-bold">B.Sc. in Computer Science</p>
                            </div>
                            <p className="text-[var(--text-secondary)] text-sm">Unity University • Graduated with Distinction</p>
                        </div>

                        {/* Languages */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Globe size={24} className="text-[var(--accent)]" />
                                <p className="text-[var(--text-primary)] font-bold">Languages</p>
                            </div>
                            <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center md:justify-start pl-11">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-sm font-bold text-[var(--text-primary)]">Amharic</span>
                                    <span className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Native</span>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-sm font-bold text-[var(--text-primary)]">English</span>
                                    <span className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Professional</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-6 text-[var(--text-secondary)] text-sm">
                        <a href="https://github.com/miki8013" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">
                            github
                        </a>
                        <a href="mailto:wassiemiki@gmail.com" className="hover:text-[var(--accent)] transition-colors">
                            email
                        </a>
                        <a href="/michael_wassie_resume.pdf" target="_blank" className="hover:text-[var(--accent)] transition-colors">
                            resume
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-[var(--border-color)] flex flex-col items-center justify-center gap-2">
                    <p className="text-[var(--text-muted)] text-sm font-medium">
                        Made by Michael Wassie
                    </p>
                    <p className="text-[var(--text-muted)]/60 text-xs">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
