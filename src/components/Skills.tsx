"use client";
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Workflow } from 'lucide-react';

const skillCategories = [
    {
        title: "Languages & Core",
        icon: <Code2 className="text-[var(--accent)]" size={22} />,
        description: "Fundamental technologies for building modern, scalable applications.",
        skills: ["Java", "JavaScript", "TypeScript", "SQL", "Go"]
    },
    {
        title: "Frontend Development",
        icon: <Layout className="text-[var(--accent)]" size={22} />,
        description: "Crafting responsive and high-performance user interfaces.",
        skills: ["React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"]
    },
    {
        title: "Backend & Systems",
        icon: <Server className="text-[var(--accent)]" size={22} />,
        description: "Architecting secure server-side logic and robust databases.",
        skills: ["Node.js", "Express", "MongoDB", "MySQL", "PostgreSQL"]
    },
    {
        title: "DevOps & Tools",
        icon: <Workflow className="text-[var(--accent)]" size={22} />,
        description: "Streamlining development workflows and ensuring code quality.",
        skills: ["Git", "Docker", "CI/CD", "Vercel"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-10 px-6 bg-[var(--background)]">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
                        Technical Skillset
                    </h2>
                </motion.div>
 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative p-8"
                        >
                            {/* Ethereal Half-Glass Wash (Fades into the grid) */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--card-bg)]/90 via-[var(--background)]/20 to-transparent backdrop-blur-sm rounded-tl-[2rem] rounded-br-[4rem] -z-10 border-t border-l border-[var(--border-color)]/50 shadow-sm" />

                            <div className="flex items-center gap-4 mb-5">
                                <div className="text-[var(--accent)] transition-colors duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
                                    {category.title}
                                </h3>
                            </div>

                            <p className="text-[var(--text-secondary)] mb-6 text-[15px] leading-relaxed max-w-sm">
                                {category.description}
                            </p>

                            <div className="flex flex-wrap gap-x-6 gap-y-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-sm text-[var(--text-secondary)] font-medium hover:text-[var(--accent)] transition-colors cursor-default flex items-center gap-2"
                                    >
                                        <span className="h-1 w-1 rounded-full bg-[var(--accent)]/40" />
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Skills;
