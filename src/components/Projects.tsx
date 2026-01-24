"use client";
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "QuickRunner",
        tag: "solo",
        description: "Multi-shop ordering platform. Built with MERN stack. WhatsApp integration for orders. Real shops, real customers.",
        link: "https://quickrunner.shop",
        color: "var(--accent)"
    },
    {
        title: "Fresh Fashion",
        tag: "solo",
        description: "E-commerce product showcase with an admin dashboard. Stats, product management, the whole deal.",
        link: "https://freshfashion.co",
        color: "var(--accent-2)"
    },
    {
        title: "Zemen Events",
        tag: "team project",
        description: "Event management system. Registration, admin modules. Built this with my team for managing local events.",
        link: "https://zemen-events.netlify.app",
        color: "var(--accent-3)"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="container mx-auto max-w-5xl">
                {/* Header with personality */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="space-y-4"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                            <span className="text-[var(--text-secondary)] handwritten text-3xl md:text-4xl block mb-2">things I've built →</span>
                            <span className="text-[var(--text-primary)]">Projects</span>
                        </h2>
                        <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
                            here are some things I've worked on. All of them are live and being used by real people.
                        </p>
                    </motion.div>
                </div>

                {/* Project cards */}
                <div className="space-y-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: false }}
                            className="group"
                        >
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-8 border-2 border-[var(--border-color)] rounded-xl hover:border-[var(--accent)] transition-all bg-[var(--card-bg)] hover:bg-[var(--card-bg)] paper-texture"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] transition-colors">
                                                {project.title}
                                            </h3>
                                            <ArrowUpRight
                                                size={20}
                                                className="text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                                                style={{ color: project.color }}
                                            />
                                        </div>
                                        <span
                                            className="inline-block px-3 py-1 text-xs font-bold rounded-full"
                                            style={{
                                                backgroundColor: `color-mix(in srgb, ${project.color} 15%, transparent)`,
                                                color: project.color,
                                                border: `1px solid color-mix(in srgb, ${project.color} 20%, transparent)`
                                            }}
                                        >
                                            {project.tag}
                                        </span>
                                    </div>
                                    <ExternalLink
                                        size={20}
                                        className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors flex-shrink-0"
                                    />
                                </div>
                                <p className="text-[var(--text-secondary)] leading-relaxed">
                                    {project.description}
                                </p>
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    className="mt-12 text-center"
                >
                    <p className="text-[var(--text-secondary)] handwritten text-xl">
                        more projects on my{" "}
                        <a
                            href="https://github.com/miki8013"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--accent)] hover:underline"
                        >
                            github
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
