"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

const featuredProjects = [
    {
        title: "QuickRunner",
        tag: "E commerce & Logistics",
        description: "A comprehensive multi shop ordering platform built with the MERN stack. Features seamless WhatsApp integration for real time order processing.",
        problem: "In many regions, customers struggle to access local shop inventories digitally. Shopping for specific sizes or items often involves visiting stores blindly, with no reliable home delivery infrastructure in place.",
        solution: "QuickRunner digitizes local commerce by providing a centralized catalog for multiple shops. By leveraging WhatsApp as the primary communication and ordering channel, it meets customers where they already are, enabling friction less transactions and reliable door to step delivery.",
        features: [
            "Real time Inventory Access: View sizes and availability instantly.",
            "WhatsApp Integration: Direct communication channel for order confirmation.",
            "Logistics Management: Dedicated runners for reliable local delivery.",
            "Digital Storefronts: Easy to manage dashboards for shop owners."
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
            "/quickrunner/quickrunnerconatctus.png"
        ],
        link: "https://quickrunner.shop",
    },
    {
        title: "Fresh Fashion",
        tag: "E commerce & Analytics",
        description: "Modern e commerce showcase featuring a robust admin dashboard for analytics, inventory management, and customer insights.",
        problem: "Small fashion brands often struggle to showcase their inventory effectively across web platforms. Maintaining detailed product pages and managing customer orders manually can lead to operational bottlenecks.",
        solution: "I built a high performance e commerce showcase that integrates directly with WhatsApp. By developing a dedicated admin panel for statistics and site management, the brand can now monitor growth and update inventory in real time.",
        features: [
            "Responsive Product Showcase: Elegant and detailed product layouts.",
            "WhatsApp Ordering: Frictionless customer communication and sales.",
            "Admin Statistics Panel: Real time monitoring of site performance.",
            "Solo Development: Built from the ground up to ensure quality."
        ],
        images: [
            "/freshfashion/freshfashionhome.jpg",
            "/freshfashion/freshfashioncatagorysection.jpg",
            "/freshfashion/freshfashionproductpage.jpg",
            "/freshfashion/freshfashionproductpage2.jpg",
            "/freshfashion/freshfashionslides.jpg",
            "/freshfashion/photo20260411140524.jpg"
        ],
        link: "https://freshfashion.co",
    },
    {
        title: "Zemen Events",
        tag: "Event Management",
        description: "Zemen Event was born from a passion to make event management seamless and joyful for everyone. Our journey began with a simple idea: bring people together through technology. Today we empower thousands to create, discover, and enjoy events with ease.",
        problem: "Local communities lack centralized platforms for organizing and registering for community events. This leads to coordination challenges and poor overall user experiences.",
        solution: "Our team developed a web based management system that centralizes event registration and coordination. By implementing robust admin modules, we improved system reliability and the registration flow for all users.",
        mission: "To connect people through memorable events and provide powerful, intuitive tools for organizers and attendees alike.",
        vision: "A world where every event is accessible, engaging, and impactful, no matter the size or location.",
        values: [
            "Innovation & Simplicity",
            "Trust & Transparency",
            "Inclusivity & Community",
            "Reliability & Support"
        ],
        features: [
            "Event Registration Modules: Streamlined flow for community members.",
            "Admin Management: Centralized control for event organizers.",
            "Improved Reliability: Optimized for high traffic and coordination.",
            "Collaborative Team Effort: Focused on UX and system stability."
        ],
        images: [
            "/zemenevents/zemenhomepage.png",
            "/zemenevents/zemenevents.png",
            "/zemenevents/zemeneventdetail.png",
            "/zemenevents/zemenpage.png",
            "/zemenevents/zemenadminpage.png",
            "/zemenevents/zemenadmin.png",
            "/zemenevents/zemenorganizer.png",
            "/zemenevents/zemenconatctus.png"
        ],
        link: "https://zemen-events.netlify.app",
    },
    {
        title: "pharmaET",
        tag: "Healthcare & Delivery",
        description: "Ethiopia's delivery platform for health essentials and daily needs. Reliable delivery across Addis Ababa. No hassle, no queues. A Flutter mobile app is currently in release testing phase.",
        problem: "Accessing health essentials and daily necessities in Addis Ababa often involves long queues, limited pharmacy hours, and the inconvenience of physically visiting multiple stores. This is especially challenging for elderly individuals, those with mobility issues, or busy professionals.",
        solution: "pharmaET provides a seamless digital platform for ordering health essentials and daily needs with reliable door-to-door delivery across Addis Ababa. The platform eliminates queues and hassle, bringing what customers need right to their doorstep.",
        features: [
            "Health Essentials Delivery: Pharmaceuticals and wellness products delivered.",
            "Daily Needs Platform: Comprehensive catalog for everyday necessities.",
            "Reliable Coverage: Delivery across Addis Ababa with tracking.",
            "Queue-Free Experience: Skip the lines and wait from home."
        ],
        images: [
            "/pharmaET/pharmaet_homepage.png",
            "/pharmaET/pharmaEt_footer.png"
        ],
        link: "https://pharmaet.com",
    },
    {
        title: "Global Telegram Weather Bot",
        tag: "Node.js & APIs",
        description: "A secure, production-ready Telegram bot delivering real-time weather details and 5-day forecasts for any location worldwide with smart location resolution.",
        problem: "Users often struggle with location typos when requesting weather information, leading to failed queries and poor user experience. Traditional bots lack intuitive location selection mechanisms.",
        solution: "Developed a custom geocoding pipeline that resolves partial searches into interactive location-selection grids via inline keyboards, preventing spelling error failures. Integrated GPS support for precise location-based weather reports.",
        features: [
            "Smart Location Resolution: Search-and-pick interface with up to 5 geocoded matches via inline keyboards, handling regions and countries to distinguish identical city names.",
            "GPS Integration: Native Telegram location sharing reads device coordinates for precise, localized weather reports.",
            "5-Day Forecasts: Fetches max/min temperatures, condition descriptions, and date details in clean, formatted text output.",
            "Rate Limiting: Custom per-user rate limiter (max 5 req/min) with automated cleanup of idle memory structures to prevent spam.",
            "Input Sanitization: Filters and cleans incoming search inputs with a 100-character limit to block exploits.",
            "Cloud-Ready Health Server: Binds a Node.js HTTP server (/ and /health routes) with method validation and connection rate limiting for zero-downtime hosting."
        ],
        images: [
            "/Weatheru/screen_1.png",
            "/Weatheru/screen_2.png",
            "/Weatheru/screen_3.png"
        ],
        link: "https://t.me/weatherunowbot",
        telegramBot: true,
    }
];

const additionalProjects = [
    {
        title: "Quesa ChatBot",
        tag: "Telegram Bot & AI",
        description: "An intelligent conversational AI chatbot for Telegram with context-aware responses and interactive guided flows.",
        problem: "Users needed an easy-to-use Telegram bot that could handle complex multi-step processes and provide contextual help without complex command structures.",
        solution: "Built an AI-powered Telegram chatbot with intelligent FAQ matching, guided support flows, and load-balanced ticket escalation. The bot uses fuzzy matching algorithms to handle typos and natural language variations while automatically routing complex issues to support agents.",
        features: [
            "Intelligent FAQ Matching: Typo-tolerant text normalization with Levenshtein distance algorithm for fuzzy word matching.",
            "8 Guided Support Flows: OTP verification, login recovery, payment guidance, order tracking, cancellation, delivery setup, and receipt upload.",
            "Smart Ticket Escalation: One-click escalation with guided form collection (name → phone → issue description) and automatic ticket generation.",
            "Load-Balanced Distribution: Round-robin routing across unlimited support agents configured via environment variables.",
            "Session Management: Per-user session tracking with conversation history and context awareness.",
            "Interactive Guided Flows: Step-by-step workflows using inline buttons for frictionless navigation.",
            "Responsive Design: Works seamlessly across mobile and desktop Telegram clients."
        ],
        images: [
            "/QuesaChatBot/quesan.png",
            "/QuesaChatBot/quesaore.png",
            "/QuesaChatBot/quesatra.png",
            "/QuesaChatBot/queststart.png"
        ],
        link: "https://t.me/QuesaChatBot",
        telegramBot: true,
    }
];

const projects = featuredProjects;

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [showMore, setShowMore] = useState(false);
    const displayedProjects = showMore ? [...projects, ...additionalProjects] : projects;

    return (
        <section id="projects" className="py-10 px-6 bg-[var(--background)]">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-1"
                        >

                        <h2 className="main-title text-5xl md:text-7xl lg:text-8xl text-[var(--text-primary)]">
                            Featured Projects
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {displayedProjects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`group relative cursor-pointer perspective-1000 ${i === 0 || i === 3 || i === 4 ? 'md:col-span-2' : ''}`}
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Color Blobs - Enhanced with Frosted Glass Effect */}
                            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                                <div className="absolute top-[-20%] right-[-10%] w-48 h-48 bg-[var(--blob-accent)] rounded-full blur-3xl animate-pulse" />
                                <div className="absolute bottom-[-15%] left-[-10%] w-40 h-40 bg-[var(--blob-purple)] rounded-full blur-3xl" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-[var(--blob-blue)] rounded-full blur-3xl" />
                                <div className="absolute top-[20%] left-[10%] w-32 h-32 bg-[var(--blob-accent)] rounded-full blur-2xl" />
                                <div className="absolute bottom-[20%] right-[15%] w-36 h-36 bg-[var(--blob-purple)] rounded-full blur-2xl" />
                            </div>

                            {/* 3D 'Thickness' Layer (The tearing edge) */}
                            <div className="absolute inset-0 bg-[var(--accent)]/10 rounded-2xl transform translate-x-3 translate-y-3 -z-20 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5" />
                            
                            {/* Card Body with Glass Effect */}
                            <div className="relative z-10 bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--border-color)] rounded-2xl p-8 md:p-12 h-full flex flex-col justify-between transition-all duration-500 transform rotate-x-2 rotate-y-[-1deg] group-hover:rotate-x-4 group-hover:rotate-y-[-2deg] group-hover:-translate-y-2 group-hover:-translate-x-2 border-l-[12px] border-l-[var(--accent)] shadow-2xl shadow-black/20">
                                <div className={`flex flex-col ${i === 0 || i === 3 || i === 4 ? 'md:flex-row md:items-center md:justify-between' : 'justify-start'} gap-8`}>
                                    <div className="flex-1 space-y-4">
                                        <div className="space-y-1">
                                            <h3 className="main-title text-3xl md:text-4xl lg:text-5xl text-[var(--text-primary)] tracking-tight">
                                                {project.title}
                                            </h3>
                                        </div>
                                        
                                        <p className="text-[var(--text-secondary)] leading-relaxed font-medium text-base lg:text-lg max-w-2xl">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className={`flex-shrink-0 ${i !== 0 && i !== 3 && i !== 4 ? 'self-end' : ''}`}>
                                        <div className="w-16 h-16 rounded-full border border-[var(--border-color)] flex items-center justify-center bg-[var(--card-bg)] text-[var(--text-primary)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-500">
                                            <ArrowUpRight size={32} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center space-y-8"
                >
                    {!showMore && (
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            onClick={() => setShowMore(true)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent)] text-white font-bold rounded-full hover:shadow-lg hover:shadow-[var(--accent)]/50 transition-all duration-300 border border-[var(--accent)]/50"
                        >
                            Load More Projects
                            <ArrowUpRight size={18} />
                        </motion.button>
                    )}
                    
                    <p className="text-[var(--text-secondary)]">
                        Interested in collaboration? Visit my{" "}
                        <a
                            href="https://github.com/miki8013"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--accent)] font-bold hover:underline"
                        >
                            GitHub
                        </a>
                    </p>
                </motion.div>
            </div>

            <ProjectModal 
                project={selectedProject} 
                isOpen={!!selectedProject} 
                onClose={() => setSelectedProject(null)} 
            />
        </section>
    );
};



export default Projects;
