"use client";
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Workflow } from 'lucide-react';

const skillCategories = [
    {
        title: "Languages & Core",
        icon: <Code2 className="text-[var(--accent)]" size={24} />,
        description: "The fundamental technologies I use to build robust applications.",
        skills: ["Java", "JavaScript (ES6+)", "TypeScript", "HTML5 & CSS3", "SQL"]
    },
    {
        title: "Frontend Development",
        icon: <Layout className="text-[var(--accent-2)]" size={24} />,
        description: "Creating responsive, interactive, and accessible user interfaces.",
        skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Capacitor", "Responsive Design"]
    },
    {
        title: "Backend & Database",
        icon: <Server className="text-[var(--accent-3)]" size={24} />,
        description: "Building scalable server-side logic and managing data efficiently.",
        skills: ["Node.js", "Express.js", "MongoDB", "SQL", "Mongoose", "RESTful APIs"]
    },
    {
        title: "Development Workflow",
        icon: <Workflow className="text-[var(--text-primary)]" size={24} />,
        description: "Tools I use for version control, deployment, and maintaining code quality.",
        skills: ["Git & GitHub", "VS Code", "Vercel / Netlify", "Postman", "Agile/Scrum"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 bg-[var(--background)]">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                        <span className="text-[var(--text-secondary)] handwritten text-3xl md:text-4xl block mb-2">what I work with →</span>
                        <span className="text-[var(--text-primary)]">Technical Expertise</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
                        A deep dive into my technical toolbox. I focus on modern, scalable technologies to build efficient solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: false }}
                            className="bg-[var(--card-bg)] border border-[var(--border-color)] p-8 rounded-2xl hover:border-[var(--accent)]/50 transition-colors group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-[var(--background)] rounded-lg border border-[var(--border-color)] group-hover:scale-110 transition-transform">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                                    {category.title}
                                </h3>
                            </div>

                            <p className="text-[var(--text-secondary)] mb-6 min-h-[3rem]">
                                {category.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-[var(--background)] border border-[var(--border-color)] rounded-md text-sm text-[var(--text-secondary)] font-medium hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all cursor-default"
                                    >
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
