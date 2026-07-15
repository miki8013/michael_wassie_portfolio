"use client";
import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

const featuredProjects = [
  {
    title: "QuickRunner",
    description: "Multi-shop ordering platform where customers browse inventory across local stores and place orders via WhatsApp. Built the full MERN stack: product catalog, cart system, runner assignment, and a shop owner dashboard for managing stock and deliveries.",
    problem: "Customers couldn't see what local shops had in stock without physically going there. Shop owners had no way to manage orders digitally or coordinate deliveries.",
    solution: "QuickRunner gives every shop a live digital storefront. Orders flow through WhatsApp because that's where customers already are. A runner management system handles last-mile delivery, and shop owners get a dashboard to update inventory and track orders in real time.",
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
    description: "E-commerce site for a fashion brand with a full admin panel. Built product pages, a category browser, and a WhatsApp checkout flow. Admin side handles inventory updates, order tracking, and sales analytics.",
    problem: "The brand was taking orders manually over DMs with no organized product catalog or way to track what was selling.",
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
    description: "Event management platform for organizing and registering community events. Built registration flows, an organizer dashboard, and an admin panel for approving events and managing attendees.",
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
    description: "Delivery platform for pharmacies and daily essentials. Flutter mobile app currently in release testing. Built the backend API, product catalog, and order management system.",
    problem: "Accessing health essentials in Addis Ababa often involves long queues and the inconvenience of physically visiting multiple stores, especially challenging for elderly individuals or busy professionals.",
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
    description: "Telegram bot that returns real-time weather and 5-day forecasts for any location. Handles typos via a geocoding search-and-pick flow. Built-in rate limiting (5 req/min per user), input sanitization, and a health endpoint for uptime monitoring.",
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
    description: "Telegram support bot with FAQ matching that tolerates typos using Levenshtein distance. Routes complex issues to human agents via a round-robin load balancer. Handles 8 guided flows: OTP help, payment issues, order tracking, cancellations. No commands needed.",
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

const projectMeta: Record<string, { stack: string; role: string }> = {
  "QuickRunner":       { stack: "MERN STACK, WHATSAPP API",       role: "FULL STACK DEVELOPMENT" },
  "Fresh Fashion":     { stack: "NEXT.JS, MONGODB, WHATSAPP",     role: "FULL STACK DEVELOPMENT" },
  "Zemen Events":      { stack: "REACT, NODE.JS, POSTGRESQL",     role: "FULL STACK DEVELOPMENT" },
  "pharmaET":          { stack: "FLUTTER, NODE.JS, REST API",     role: "BACKEND + MOBILE DEV"   },
  "Global Weather Bot":{ stack: "NODE.JS, TELEGRAM API",          role: "BOT DEVELOPMENT"        },
  "Quesa ChatBot":     { stack: "NODE.JS, TELEGRAM BOT API",      role: "BOT DEVELOPMENT"        },
};

const ProjectCard = ({ project, index, onClick }: { project: any; index: number; onClick: () => void }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.85);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const cardCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      
      // Distance from center of viewport
      const distance = Math.abs(cardCenter - viewportCenter);
      const maxDistance = windowHeight;
      
      // Scale from 0.75 (far) to 1 (centered)
      const newScale = Math.max(0.75, 1 - (distance / maxDistance) * 0.25);
      setScale(newScale);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const meta = projectMeta[project.title] ?? { stack: "WEB DEVELOPMENT", role: "FULL STACK" };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <div 
      ref={cardRef}
      className="w-full py-6 md:py-12 transition-transform duration-500 ease-out flex justify-center"
      style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}
    >
      {/* Mobile layout: stacked card */}
      <div className="flex flex-col lg:hidden w-full cursor-pointer group px-4" onClick={handleClick}>
        {/* Image */}
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-none shadow-xl mb-5">
          <div className="absolute top-0 left-0 right-0 h-7 bg-gray-800 flex items-center px-3 gap-2 z-10">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
            <div className="flex-1 mx-2 h-4 rounded bg-gray-700 flex items-center px-2">
              <span className="text-gray-400 text-[8px] font-mono truncate">{project.link}</span>
            </div>
          </div>
          <img
            src={project.images?.[0] || '/placeholder.jpg'}
            alt={project.title}
            className="w-full h-full object-cover pt-7"
          />
        </div>
        {/* Text */}
        <div className="space-y-3">
          <h3 className="main-title text-4xl text-[var(--text-primary)]">{project.title}</h3>
          <div className="space-y-0.5 opacity-60">
            <p className="tech-text text-xs text-[var(--text-secondary)]">{meta.stack}</p>
            <p className="tech-text text-xs text-[var(--text-secondary)]">ROLE: {meta.role}</p>
          </div>
          <div className="w-10 h-0.5 bg-[var(--accent)]" />
        </div>
      </div>

      {/* Desktop layout: side by side */}
      <div className="hidden lg:flex gap-10 items-start w-full cursor-pointer group" onClick={handleClick}>
        {/* LEFT — Image (70%) with browser chrome */}
        <motion.div 
          className="relative w-[60%] aspect-[16/8] overflow-hidden rounded-none"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Browser chrome */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex items-center px-3 gap-2 z-10">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <div className="flex-1 mx-3 h-5 rounded bg-gray-700 flex items-center px-2">
              <span className="text-gray-400 text-[9px] font-mono truncate">{project.link}</span>
            </div>
          </div>

          {/* Screenshot */}
          <img
            src={project.images?.[0] || '/placeholder.jpg'}
            alt={project.title}
            className="w-[90%] h-full object-cover pt-8 mx-auto block"
          />

        </motion.div>

        {/* RIGHT — Text content (30%) - NO CARD, direct on background */}
        <motion.div 
          className="w-[30%] space-y-6"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="main-title text-5xl text-[var(--text-primary)] leading-tight">
            {project.title}
          </h3>

          <div className="space-y-1 opacity-60">
            <p className="tech-text text-[var(--text-secondary)]">{meta.stack}</p>
            <p className="tech-text text-[var(--text-secondary)]">ROLE: {meta.role}</p>
          </div>

          <div className="w-12 h-0.5 bg-[var(--accent)]" />
        </motion.div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof featuredProjects)[0] | null>(null);
  const [showMore, setShowMore] = useState(false);
  const displayedProjects = showMore ? [...featuredProjects, ...additionalProjects] : featuredProjects;
  
  const { scrollYProgress } = useScroll();
  const featuredX = useTransform(scrollYProgress, [0, 0.3], [-50, 0]);
  const projectsX = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
  const starRotation = useTransform(scrollYProgress, [0, 0.5], [0, 1440]);

  return (
    <>
      <section id="projects" className="py-20 overflow-hidden">
      <div className="w-full px-4 md:px-6 lg:px-0">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <span className="accent-line mb-4" />
          <div className="flex flex-col items-start relative">
            <motion.h2 
              className="main-title text-5xl md:text-7xl lg:text-8xl text-[var(--text-primary)]"
              style={{ x: featuredX }}
            >
              Featured
            </motion.h2>
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block"
              style={{ rotate: starRotation }}
            >
              <svg width="220" height="220" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="chromatic" x="-30%" y="-30%" width="160%" height="160%" colorInterpolationFilters="sRGB">
                    
                    {/* Sharp red channel — offset left */}
                    <feOffset in="SourceGraphic" dx="-1.2" dy="0" result="rShift"/>
                    <feColorMatrix in="rShift" type="matrix"
                      values="1 0 0 0 0
                              0 0 0 0 0
                              0 0 0 0 0
                              0 0 0 1 0" result="rChannel"/>

                    {/* Sharp green channel — centered */}
                    <feColorMatrix in="SourceGraphic" type="matrix"
                      values="0 0 0 0 0
                              0 1 0 0 0
                              0 0 0 0 0
                              0 0 0 1 0" result="gChannel"/>

                    {/* Sharp blue channel — offset right */}
                    <feOffset in="SourceGraphic" dx="1.2" dy="0" result="bShift"/>
                    <feColorMatrix in="bShift" type="matrix"
                      values="0 0 0 0 0
                              0 0 0 0 0
                              0 0 1 0 0
                              0 0 0 1 0" result="bChannel"/>

                    {/* Blend all three channels */}
                    <feBlend in="rChannel" in2="gChannel" mode="screen" result="rg"/>
                    <feBlend in="rg" in2="bChannel" mode="screen" result="rgb"/>

                    {/* Soft outer glow only — very mild blur on top */}
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" result="softGlow"/>
                    <feColorMatrix in="softGlow" type="matrix"
                      values="1 0 0 0 0
                              0 1 0 0 0
                              0 0 1 0 0
                              0 0 0 0.4 0" result="glowFaded"/>

                    <feBlend in="rgb" in2="glowFaded" mode="screen"/>
                  </filter>
                </defs>
                {/* 4-point star at full resolution */}
                <path
                  d="M50 5 L55.5 44.5 L95 50 L55.5 55.5 L50 95 L44.5 55.5 L5 50 L44.5 44.5 Z"
                  fill="white"
                  filter="url(#chromatic)"
                />
              </svg>
            </motion.div>
            <motion.h2 
              className="main-title text-5xl md:text-7xl lg:text-8xl text-[var(--text-primary)] self-end"
              style={{ x: projectsX }}
            >
              Projects
            </motion.h2>
          </div>
        </motion.div>

        {/* Projects with scroll-based scaling */}
        <div className="space-y-4">
          {displayedProjects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onClick={() => {
                console.log('Clicked project:', project.title);
                setSelectedProject(project);
              }}
            />
          ))}
        </div>

        {/* Load more */}
        {!showMore && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 flex justify-center"
          >
            <button
              onClick={() => setShowMore(true)}
              className="px-8 py-4 bg-[var(--accent)] text-white font-bold rounded-lg hover:bg-[var(--accent-secondary)] transition-all duration-200 flex items-center gap-2 text-sm shadow-lg hover:shadow-xl hover:scale-105"
            >
              Load More Projects
              <ArrowUpRight size={18} />
            </button>
          </motion.div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
    </>
  );
};

export default Projects;
