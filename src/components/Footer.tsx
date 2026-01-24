const Footer = () => {
    return (
        <footer className="py-16 px-6 border-t border-[var(--border-color)] bg-[var(--footer-bg)]">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <div>
                        <div className="text-lg font-bold">
                            <span className="text-[var(--text-primary)]">Micheal Wassie</span>
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

                <div className="mt-8 text-center">
                    <p className="text-[var(--text-muted)] text-sm">
                        © {new Date().getFullYear()} Micheal Wassie. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
