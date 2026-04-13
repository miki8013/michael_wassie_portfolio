"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ArrowRight, Github, Mail } from 'lucide-react';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth physics for the lens
    const springConfig = { damping: 25, stiffness: 150 };
    const smoothedX = useSpring(mouseX, springConfig);
    const smoothedY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            mouseX.set(e.clientX - rect.left);
            mouseY.set(e.clientY - rect.top);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const MatrixRain = () => {
        const canvasRef = useRef<HTMLCanvasElement>(null);
        const trailsRef = useRef<{x: number, y: number, char: string, opacity: number}[]>([]);
        
        useEffect(() => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            
            const updateSize = () => {
                const parent = canvas.parentElement;
                if (parent) {
                    canvas.width = parent.clientWidth;
                    canvas.height = parent.clientHeight;
                }
            };
            updateSize();
            window.addEventListener('resize', updateSize);

            const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@&%*";
            const fontSize = 14;
            const columns = Math.ceil(canvas.width / fontSize);
            const drops: number[] = new Array(columns).fill(0).map(() => Math.random() * -100);

            const draw = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.font = `bold ${fontSize}px monospace`;
                
                for (let i = 0; i < drops.length; i++) {
                    const char = characters.charAt(Math.floor(Math.random() * characters.length));
                    const x = i * fontSize;
                    const y = drops[i] * fontSize;

                    ctx.fillStyle = '#ffffff'; 
                    ctx.fillText(char, x, y);
                    trailsRef.current.push({ x, y, char, opacity: 1 });
                    
                    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                        drops[i] = 0;
                    }
                    drops[i]++;
                }

                trailsRef.current = trailsRef.current.filter(t => t.opacity > 0);
                trailsRef.current.forEach(t => {
                    ctx.fillStyle = `rgba(0, 255, 65, ${t.opacity})`; 
                    ctx.fillText(t.char, t.x, t.y);
                    t.opacity -= 0.05; 
                });
            };

            const interval = setInterval(draw, 50);
            return () => {
                clearInterval(interval);
                window.removeEventListener('resize', updateSize);
            };
        }, []);
        return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
    };

    return (
        <section 
            ref={containerRef}
            className="relative min-h-[70vh] flex items-center pt-36 md:pt-40 pb-16 overflow-hidden px-6"
        >
            {/* Global Matrix Reveal Layer - Behind Text */}
            <motion.div
                className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
                style={{
                    WebkitMaskImage: useMotionTemplate`radial-gradient(circle 300px at ${smoothedX}px ${smoothedY}px, black 35%, transparent 100%)`,
                    maskImage: useMotionTemplate`radial-gradient(circle 300px at ${smoothedX}px ${smoothedY}px, black 35%, transparent 100%)`,
                }}
            >
                <MatrixRain />
            </motion.div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="flex flex-col items-center text-center space-y-8">
                    <div className="flex flex-col items-center gap-2 w-full">
                        <div className="space-y-4 pt-4 w-full">
                            <div className="flex flex-col gap-0 w-full relative">
                                {/* Ghost Echoes - Expansive Background Layers */}
                                <div className="absolute -top-16 -left-32 pointer-events-none select-none -z-10 hidden lg:block text-[var(--text-primary)] opacity-5">
                                    <h1 className="main-title text-[14rem] blur-[3px] leading-none">MICHAEL</h1>
                                </div>
                                <div className="absolute -top-6 left-64 pointer-events-none select-none -z-10 hidden lg:block opacity-[0.03]">
                                    <h1 className="main-title text-[12rem] stroke-text text-transparent leading-none">MICHAEL</h1>
                                </div>
                                
                                <div className="absolute -bottom-24 -right-32 pointer-events-none select-none -z-10 hidden lg:block text-[var(--accent)] opacity-5">
                                    <h1 className="main-title text-[14rem] blur-[5px] leading-none">WASSIE</h1>
                                </div>
                                <div className="absolute -bottom-12 right-64 pointer-events-none select-none -z-10 hidden lg:block opacity-[0.03]">
                                    <h1 className="main-title text-[12rem] stroke-text text-transparent leading-none">WASSIE</h1>
                                </div>

                                <div className="self-start -translate-x-4 md:-translate-x-20 lg:-translate-x-32 relative z-10 transition-transform duration-700">
                                    <motion.h1 
                                        initial={{ opacity: 0, x: -100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className="main-title text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.8] text-[var(--text-primary)]"
                                    >
                                        Michael
                                    </motion.h1>
                                </div>
                                <div className="self-end translate-x-4 md:translate-x-20 lg:translate-x-32 relative z-10 transition-transform duration-700">
                                    <motion.h1 
                                        initial={{ opacity: 0, x: 100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                        className="main-title text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.8] text-[var(--text-primary)]"
                                    >
                                        Wassie
                                    </motion.h1>
                                </div>
                            </div>
                            <div className="pt-6 text-center max-w-2xl mx-auto">
                                <h2 className="tech-text text-lg md:text-2xl text-[var(--text-secondary)] tracking-[0.6em] opacity-80 uppercase">
                                    Software Developer
                                </h2>
                            </div>
                        </div>

                        {/* Professional intro */}
                        <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed font-medium">
                            Crafting scalable web and mobile applications with a focus on clean architecture, 
                            performance, and exceptional user experience.
                        </p>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2 items-center justify-center text-sm pt-4">
                            <span className="tech-text text-[var(--accent)] text-[10px] opacity-70 mr-2">Tools I Use</span>
                            {["React", "Next.js", "Node.js", "TypeScript", "Tailwind"].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-[var(--card-bg)] text-[var(--text-secondary)] border border-[var(--border-color)] rounded-full text-xs font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 w-full px-4 sm:px-0">
                            <motion.a
                                href="#projects"
                                className="w-full sm:w-auto px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white font-bold rounded-full transition-all flex items-center justify-center gap-3 shadow-xl shadow-[var(--accent)]/20 text-base md:text-lg"
                            >
                                Explore Work
                                <ArrowRight size={20} />
                            </motion.a>

                            {/* Shimmering Resume Button */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto border-beam-wrapper rounded-full group overflow-hidden"
                            >
                                <div className="border-beam-effect !animation-duration-[4s]" />
                                <a
                                    href="/michael_wassie_resume.pdf"
                                    target="_blank"
                                    className="card-inner-bg px-8 py-4 flex items-center justify-center text-sky-600 dark:text-sky-400 font-bold rounded-full text-base md:text-lg bg-sky-50/80 dark:bg-sky-950/50 transition-all relative z-10"
                                >
                                    <span className="relative z-20">Resume</span>
                                </a>
                            </motion.div>

                            <div className="flex items-center gap-6 pl-4 border-l border-[var(--border-color)]">
                                <a
                                    href="https://github.com/miki8013"
                                    target="_blank"
                                    className="p-4 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--text-primary)] hover:scale-110 transition-all shadow-sm"
                                    aria-label="GitHub"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href="mailto:wassiemiki@gmail.com"
                                    className="p-4 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-red-500 hover:scale-110 transition-all shadow-sm"
                                    aria-label="Email"
                                >
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--accent)] to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
