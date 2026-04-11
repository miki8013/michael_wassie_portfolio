"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ProjectModalProps {
    project: {
        title: string;
        tag: string;
        description: string;
        longDescription?: string;
        problem?: string;
        solution?: string;
        mission?: string;
        vision?: string;
        values?: string[];
        link: string;
        accent: string;
        images?: string[];
        features?: string[];
        github?: string;
    };
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Prevent scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = 'var(--scrollbar-width, 0px)';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!project) return null;

    const handleNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (activeIndex !== null && project.images) {
            setActiveIndex((activeIndex + 1) % project.images.length);
        }
    };

    const handlePrev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (activeIndex !== null && project.images) {
            setActiveIndex((activeIndex - 1 + project.images.length) % project.images.length);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 overflow-hidden">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Lightbox Overlay */}
                    <AnimatePresence>
                        {activeIndex !== null && project.images && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center p-4 md:p-12"
                                onClick={() => setActiveIndex(null)}
                            >
                                <button
                                    onClick={(e) => { e.stopPropagation(); setActiveIndex(null); }}
                                    className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white z-50 border border-white/20"
                                >
                                    <X size={24} />
                                </button>

                                {/* Nav Buttons */}
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-4 md:left-8 p-4 bg-transparent hover:bg-white/10 rounded-full text-white transition-all z-50 group"
                                >
                                    <ChevronLeft size={48} strokeWidth={1.5} className="drop-shadow-lg opacity-50 group-hover:opacity-100 transition-opacity" />
                                </button>
                                
                                <button
                                    onClick={handleNext}
                                    className="absolute right-4 md:right-8 p-4 bg-transparent hover:bg-white/10 rounded-full text-white transition-all z-50 group"
                                >
                                    <ChevronRight size={48} strokeWidth={1.5} className="drop-shadow-lg opacity-50 group-hover:opacity-100 transition-opacity" />
                                </button>

                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.2}
                                    onDragEnd={(e, info) => {
                                        const swipe = info.offset.x;
                                        if (swipe < -100) handleNext();
                                        else if (swipe > 100) handlePrev();
                                    }}
                                    className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                                >
                                    <img
                                        src={project.images[activeIndex]}
                                        alt="Project Fullscreen"
                                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl pointer-events-none"
                                    />
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white/70 text-xs font-bold tracking-widest border border-white/10">
                                        {activeIndex + 1} / {project.images.length}
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 30 }}
                        className="relative w-full h-full md:h-auto md:max-h-[95vh] md:max-w-4xl bg-[var(--background)] border-0 md:border md:border-[var(--border-color)] rounded-none md:rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
                    >
                        {/* Header - Sticky */}
                        <div className="sticky top-0 bg-[var(--background)]/90 backdrop-blur-md z-30 flex items-center justify-between p-6 border-b border-[var(--border-color)]">
                            <div>
                                <h3 className="text-2xl font-bold text-[var(--text-primary)]">{project.title}</h3>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 bg-[var(--card-bg)] hover:bg-[var(--border-color)] rounded-full border border-[var(--border-color)] transition-colors shadow-sm"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Scrollable Container */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar bg-[var(--background)] p-6 md:p-10">
                            <div className="max-w-3xl mx-auto">
                                {/* Top Navigation Links */}
                                <div className="flex flex-wrap gap-6 mb-12 pb-6 border-b border-[var(--border-color)]">
                                    <button
                                        onClick={() => setActiveIndex(0)}
                                        className="text-sm font-bold text-[var(--accent)] hover:underline flex items-center gap-2"
                                    >
                                        <ArrowUpRight size={14} /> View project images
                                    </button>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            className="text-sm font-bold text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:underline flex items-center gap-2 transition-colors"
                                        >
                                            <Github size={14} /> Source Code
                                        </a>
                                    )}
                                </div>

                                <div className="space-y-16">
                                    {/* Passages */}
                                    <div className="space-y-12">
                                        <section>
                                            <p className="text-[var(--text-secondary)] leading-relaxed text-lg font-medium">
                                                {project.problem || project.description}
                                            </p>
                                        </section>
 
                                        <section>
                                            <p className="text-[var(--text-secondary)] leading-relaxed text-lg font-medium">
                                                {project.solution}
                                            </p>
                                        </section>
 
                                        {project.mission && (
                                            <section className="space-y-4 pt-8 border-t border-[var(--border-color)]">
                                                <p className="text-[var(--text-primary)] text-xl font-bold">Our Mission</p>
                                                <p className="text-[var(--text-secondary)] leading-relaxed text-lg font-medium">
                                                    {project.mission}
                                                </p>
                                            </section>
                                        )}
 
                                        {project.vision && (
                                            <section className="space-y-4">
                                                <p className="text-[var(--text-primary)] text-xl font-bold">Our Vision</p>
                                                <p className="text-[var(--text-secondary)] leading-relaxed text-lg font-medium">
                                                    {project.vision}
                                                </p>
                                            </section>
                                        )}
 
                                        {project.values && (
                                            <section className="space-y-6">
                                                <p className="text-[var(--text-primary)] text-xl font-bold">Our Values</p>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    {project.values.map((val, i) => (
                                                        <div key={i} className="p-4 bg-[var(--card-bg)]/30 border border-[var(--border-color)] rounded-xl text-[var(--text-secondary)] text-sm font-bold flex items-center gap-3">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                                                            {val}
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>
                                        )}
 
                                        {project.features && (
                                            <section>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    {project.features.map((feat, i) => (
                                                        <div key={i} className="flex items-start gap-4 p-5 bg-[var(--card-bg)]/50 border border-[var(--border-color)] rounded-2xl text-[var(--text-secondary)] text-sm font-semibold">
                                                            <CheckCircle2 size={18} className="text-[var(--accent)] mt-0.5 flex-shrink-0" />
                                                            {feat}
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>
                                        )}
                                    </div>
 
                                    {/* Thumbnail Gallery */}
                                    <section>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                                            {project.images && project.images.length > 0 ? (
                                                project.images.map((img, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        whileHover={{ scale: 1.02, y: -2 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        onClick={() => setActiveIndex(idx)}
                                                        className="aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border border-[var(--border-color)] bg-[var(--card-bg)] shadow-md group relative"
                                                    >
                                                        <img 
                                                            src={img} 
                                                            alt="Thumbnail" 
                                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                        />
                                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 text-white">
                                                                <ArrowUpRight size={16} />
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))
                                            ) : (
                                                <p className="text-sm italic text-[var(--text-muted)]">No images available yet.</p>
                                            )}
                                        </div>
                                    </section>

                                    {/* Bottom Links */}
                                    <div className="pt-20 pb-12 text-center border-t border-[var(--border-color)]">
                                        <div className="flex flex-col items-center">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                className="text-[var(--accent)] font-bold text-sm hover:underline flex items-center gap-2"
                                            >
                                                View Website <ExternalLink size={14} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};



export default ProjectModal;
