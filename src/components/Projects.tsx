"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

const featuredProjects = [
  {
    title: "QuickRunner",
    tag: "E-Commerce & Logistics",
    description: "A comprehensive multi-shop ordering platform built with the MERN stack. Features seamless WhatsApp integration for real-time order processing.",
    problem: "In many regions, customers struggle to access local shop inventories digitally. Shopping for specific sizes or items often involves visiting stores blindly, with no reliable home delivery infrastructure in place.",
    solution: "QuickRunner digitizes local commerce by providing a centralized catalog for multiple shops. By leveraging WhatsApp as the primary communication and ordering channel, it meets customers where they already are, enabling frictionless transactions and reliable door-to-step delivery.",
    features: [
      "Real-time Inventory Access: View sizes and availability instantly.",
      "WhatsApp Integration: Direct communication channel for order confirmation.",
      "Logistics Management: Dedicated runners for reliable local delivery.",
      "Digital Storefronts: Easy-to-manage dashboards for shop owners.",
    ],
    images: [
      "/quickrunner/quickrunnerhomepage.png",
      "/quickrunner/quickrunnercatagories.png",
      "/quickrunner/quickrunnerproductcard.jpg",
      "/quickrunner/quickrunnercartsystem.jpg",
      "/quickrunner/quickrunnerdeliveryoptioneditor.jpg",
      "/quickrunner/quickrunnercustomermessage.jpg",
      "/quickrunner/quickrunnerreviewpage.png",
      "/quickrunner/quickrunnerrunners.png",
      "/quickrunner/quickrunnerconatctus.png",
    ],
    link: "https://quickrunner.shop",
  },
  {
    title: "Fresh Fashion",
    tag: "E-Commerce & Analytics",
    description: "Modern e-commerce showcase featuring a robust admin dashboard for analytics, inventory management, and customer insights.",
    problem: "Small fashion brands often struggle to showcase their inventory effectively across web platforms. Maintaining detailed product pages and managing customer orders manually leads to operational bottlenecks.",
    solution: "A high-performance e-commerce showcase that integrates directly with WhatsApp, paired with a dedicated admin panel for real-time statistics and inventory management.",
    features: [
      "Responsive Product Showcase: Elegant and detailed product layouts.",
      "WhatsApp Ordering: Frictionless customer communication and sales.",
      "Admin Statistics Panel: Real-time monitoring of site performance.",
      "Solo Development: Built from the ground up to ensure quality.",
    ],
    images: [
      "/freshfashion/freshfashionhome.jpg",
      "/freshfashion/freshfashioncatagorysection.jpg",
      "/freshfashion/freshfashionproductpage.jpg",
      "/freshfashion/freshfashionproductpage2.jpg",
      "/freshfashion/freshfashionslides.jpg",
      "/freshfashion/photo20260411140524.jpg",
    ],
    link: "https://freshfashion.co",
  },
  {
    title: "Zemen Events",
    tag: "Event Management",
    description: "A web-based event management platform centralizing registration and coordination for local community events across Ethiopia.",
    problem: "Local communities lack centralized platforms for organizing and registering for community events, leading to coordination challenges and poor user experiences.",
    solution: "Our team developed a web-based management system that centralizes event registration and coordination. By implementing robust admin modules, we improved system reliability and the registration flow for all users.",
    mission: "To connect people through memorable events and provide powerful, intuitive tools for organizers and attendees alike.",
    vision: "A world where every event is accessible, engaging, and impactful, no matter the size or location.",
    values: ["Innovation & Simplicity", "Trust & Transparency", "Inclusivity & Community", "Reliability & Support"],
    features: [
      "Event Registration Modules: Streamlined flow for community members.",
      "Admin Management: Centralized control for event organizers.",
      "Improved Reliability: Optimized for high traffic and coordination.",
      "Collaborative Team Effort: Focused on UX and system stability.",
    ],
    images: [
      "/zemenevents/zemenhomepage.png",
      "/zemenevents/zemenevents.png",
      "/zemenevents/zemeneventdetail.png",
      "/zemenevents/zemenpage.png",
      "/zemenevents/zemenadminpage.png",
      "/zemenevents/zemenadmin.png",
      "/zemenevents/zemenorganizer.png",
      "/zemenevents/zemenconatctus.png",
    ],
    link: "https://zemen-events.netlify.app",
  },
  {
    title: "pharmaET",
    tag: "Healthcare & Delivery",
    description: "Ethiopia's delivery platform for health essentials and daily needs. Reliable delivery across Addis Ababa. No hassle, no queues.",
    problem: "Accessing health essentials in Addis Ababa often involves long queues and the inconvenience of physically visiting multiple stores — especially challenging for elderly individuals or busy professionals.",
    solution: "pharmaET provides a seamless digital platform for ordering health essentials with reliable door-to-door delivery. A Flutter mobile app is currently in release testing.",
    features: [
      "Health Essentials Delivery: Pharmaceuticals and wellness products delivered.",
      "Daily Needs Platform: Comprehensive catalog for everyday necessities.",
      "Reliable Coverage: Delivery across Addis Ababa with tracking.",
      "Queue-Free Experience: Skip the lines and wait from home.",
    ],
    images: ["/pharmaET/pharmaet_homepage.png", "/pharmaET/pharmaEt_footer.png"],
    link: "https://pharmaet.com",
  },
  {
    title: "Global Weather Bot",
    tag: "Node.js & APIs",
    description: "A secure, production-ready Telegram bot delivering real-time weather and 5-day forecasts for any location worldwide with smart location resolution.",
    problem: "Users often struggle with location typos when requesting weather, leading to failed queries and poor UX. Traditional bots lack intuitive location selection.",
    solution: "A custom geocoding pipeline resolves partial searches into interactive location-selection grids via inline keyboards. Integrated GPS support for precise reports.",
    features: [
      "Smart Location Resolution: Search-and-pick interface with up to 5 geocoded matches.",
      "GPS Integration: Native Telegram location sharing for precise reports.",
      "5-Day Forecasts: Max/min temps, condition descriptions, and dates.",
      "Rate Limiting: Custom per-user limiter (max 5 req/min) with memory cleanup.",
      "Input Sanitization: Filters inputs with a 100-character limit to block exploits.",
      "Cloud-Ready: Node.js HTTP health server for zero-downtime hosting.",
    ],
    images: ["/Weatheru/screen_1.png", "/Weatheru/screen_2.png", "/Weatheru/screen_3.png"],
    link: "https://t.me/weatherunowbot",
    telegramBot: true,
  },
];

const additionalProjects = [
  {
    title: "Quesa ChatBot",
    tag: "Telegram Bot & AI",
    description: "An intelligent conversational AI chatbot for Telegram with context-aware responses and interactive guided support flows.",
    problem: "Users needed an easy-to-use Telegram bot that could handle complex multi-step processes and provide contextual help without complex command structures.",
    solution: "An AI-powered Telegram chatbot with intelligent FAQ matching, guided support flows, and load-balanced ticket escalation using Levenshtein distance fuzzy matching.",
    features: [
      "Intelligent FAQ Matching: Typo-tolerant with Levenshtein distance algorithm.",
      "8 Guided Support Flows: OTP, login recovery, payment guidance, order tracking, and more.",
      "Smart Ticket Escalation: Guided form collection with automatic ticket generation.",
      "Load-Balanced Distribution: Round-robin routing across unlimited support agents.",
      "Session Management: Per-user conversation history and context awareness.",
      "Interactive Guided Flows: Step-by-step workflows using inline buttons.",
    ],
    images: [
      "/QuesaChatBot/quesan.png",
      "/QuesaChatBot/quesaore.png",
      "/QuesaChatBot/quesatra.png",
      "/QuesaChatBot/queststart.png",
    ],
    link: "https://t.me/QuesanBot",
    telegramBot: true,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof featuredProjects)[0] | null>(null);
  const [showMore, setShowMore] = useState(false);
  const displayedProjects = showMore ? [...featuredProjects, ...additionalProjects] : featuredProjects;

  return (
    <section id="projects" className="py-20 px-6 bg-[var(--background)]">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="accent-line mb-4" />
          <h2 className="main-title text-5xl md:text-7xl lg:text-8xl text-[var(--text-primary)]">
            Featured Projects
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedProjects.map((project, i) => {
            const isWide = i === 0 || i === 3 || i === 4;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className={isWide ? 'md:col-span-2' : ''}
              >
                <button
                  className={`project-card group w-full text-left bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-8 md:p-10 border-l-4 border-l-[var(--accent)]`}
                  onClick={() => setSelectedProject(project as any)}
                >
                  <div className={`flex flex-col ${isWide ? 'md:flex-row md:items-center md:justify-between' : 'justify-between h-full'} gap-6`}>
                    <div className="flex-1 space-y-3">
                      <span className="tag-pill">{project.tag}</span>
                      <h3 className="main-title text-3xl md:text-4xl lg:text-5xl text-[var(--text-primary)]">
                        {project.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] leading-relaxed font-medium text-sm lg:text-base max-w-2xl">
                        {project.description}
                      </p>
                    </div>
                    <div className={`flex-shrink-0 ${!isWide ? 'self-end' : ''}`}>
                      <div className="project-arrow w-14 h-14 rounded border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)]">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Footer row */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="px-8 py-3 bg-[var(--accent)] text-white font-bold rounded hover:bg-[var(--accent-secondary)] transition-colors duration-200 flex items-center gap-2 text-sm"
            >
              Load More
              <ArrowUpRight size={16} />
            </button>
          )}
          <p className="text-[var(--text-muted)] text-sm">
            More on{" "}
            <a
              href="https://github.com/miki8013"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] font-bold hover:underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>

      <ProjectModal
        project={selectedProject as any}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
