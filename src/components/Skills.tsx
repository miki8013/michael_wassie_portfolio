"use client";
import { motion } from 'framer-motion';

const skills = [
  {
    name: "React / Next.js",
    detail: "Built production storefronts, admin dashboards, and this portfolio. Default choice for anything user-facing.",
  },
  {
    name: "Node.js / Express",
    detail: "REST APIs with JWT auth, WhatsApp webhook handlers, Telegram bot backends. Comfortable with rate limiting, queues, and cron jobs.",
  },
  {
    name: "TypeScript",
    detail: "Use it on every new project. Catches the dumb bugs before they reach production.",
  },
  {
    name: "MongoDB / PostgreSQL",
    detail: "MongoDB for flexible document structures in e-commerce projects, PostgreSQL for anything relational. Written normalized schemas and optimized slow queries.",
  },
  {
    name: "Flutter",
    detail: "Built the pharmaET mobile app currently in release testing. One codebase for iOS and Android.",
  },
  {
    name: "Java",
    detail: "University foundation and used in enterprise backend work. Comfortable with OOP, collections, and Spring basics.",
  },
  {
    name: "Go",
    detail: "Learning it for services where I need low memory and fast startup. Building small tools with it currently.",
  },
  {
    name: "Docker / CI-CD",
    detail: "Containerized apps for consistent deployments. Set up basic pipelines on GitHub Actions for auto-deploy to Vercel and VPS.",
  },
  {
    name: "Odoo / ERP",
    detail: "Implemented and customized Odoo for business clients. CRM setup, inventory modules, and workflow automation.",
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
            Skills
          </h2>
        </motion.div>

        <div className="divide-y divide-[var(--border-color)]">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="group grid grid-cols-1 md:grid-cols-[220px_1fr] gap-2 md:gap-12 py-6 hover:bg-[var(--accent)]/3 transition-colors duration-150 px-2 -mx-2"
            >
              <span className="font-bold text-[var(--text-primary)] text-sm md:text-base group-hover:text-[var(--accent)] transition-colors duration-150">
                {skill.name}
              </span>
              <span className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {skill.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
