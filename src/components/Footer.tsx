import React from 'react';

const Footer = () => {
    return (
        <footer className="py-16 px-6 border-t border-[var(--border-color)] bg-[var(--footer-bg)]">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <div>
                        <div className="text-lg font-bold flex items-center gap-2 justify-center md:justify-start">
                            <img src="/micahelwassielogo.png" alt="MW Logo" className="h-8 w-8 object-contain" />
                            <span className="text-[var(--text-primary)]">Michael Wassie</span>
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
