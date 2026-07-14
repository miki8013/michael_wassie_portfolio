"use client";
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Workflow, Building2 } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages & Core",
    icon: <Code2 size={20} />,
    description: "Fundamental technologies for building modern, scalable applications.",
    skills: ["Java", "JavaScript", "TypeScript", "SQL", "Go"],
  },
  {
    title: "Frontend Development",
    icon: <Layout size={20} />,
    description: "Crafting responsive and high-performance user interfaces.",
    skills: ["React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"],
  },
  {
    title: "Backend & Systems",
    icon: <Server size={20} />,
    description: "Architecting secure server-side logic and robust databases.",
    skills: ["Node.js", "Express", "MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Business Solutions",
    icon: <Building2 size={20} />,
    description: "Enterprise resource planning and CRM expertise.",
    skills: ["CRM Specialist", "Odoo Expert", "ERP Implementation", "Process Optimization"],
  },
  {
    title: "DevOps & Tools",
    icon: <Workflow size={20} />,
    description: "Streamlining development workflows and ensuring code quality.",
    skills: ["Git", "Docker", "CI/CD", "Vercel"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-[var(--background)]">
      <div className="container mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="accent-line mb-4" />
          <h2 className="main-title text-5xl md:text-7xl lg:text-8xl text-[var(--text-primary)]">
            Technical Skillset
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={
                index === skillCategories.length - 1 && skillCategories.length % 2 !== 0
                  ? 'md:col-span-2 md:max-w-xl md:mx-auto'
                  : ''
              }
            >
              <div className="skill-card p-8">
                {/* Icon + title row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] flex items-center justify-center text-[var(--accent)]">
                    {category.icon}
                  </div>
                  <h3 className="tech-text text-xs font-bold text-[var(--text-primary)]">
                    {category.title}
                  </h3>
                </div>

                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5 font-medium">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded text-xs font-semibold bg-[var(--background)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-150 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
