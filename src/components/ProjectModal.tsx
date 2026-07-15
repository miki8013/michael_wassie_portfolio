"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ProjectModalProps {
    project: {
        title: string;
        tag?: string;
        description: string;
        longDescription?: string;
        problem?: string;
        solution?: string;
        mission?: string;
        vision?: string;
        values?: string[];
        link: string;
        accent?: string;
        images?: string[];
        features?: string[];
        github?: string;
        telegramBot?: boolean;
    } | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    // Reset image index when project changes
    useEffect(() => {
        setActiveImageIndex(0);
    }, [project?.title]);

    // Auto-advance slideshow every 3 seconds
    useEffect(() => {
        if (!project?.images || project.images.length <= 1) return;
        const timer = setInterval(() => {
            setActiveImageIndex(prev => (prev + 1) % project.images!.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [project?.title, project?.images?.length]);

    // Prevent scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!project) return null;

    const handleNextImage = () => {
        if (project.images) {
            setActiveImageIndex((activeImageIndex + 1) % project.images.length);
        }
    };

    const handlePrevImage = () => {
        if (project.images) {
            setActiveImageIndex((activeImageIndex - 1 + project.images.length) % project.images.length);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                /* On mobile: slide up from bottom. On sm+: centered with padding */
                <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center sm:p-4 overflow-hidden">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "100%" }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="relative w-full sm:w-[95vw] sm:max-w-7xl h-[92vh] bg-[var(--background)] rounded-t-3xl sm:rounded-3xl shadow-2xl z-[10000] flex flex-col lg:flex-row overflow-hidden"
                    >
                        {/* ── DESKTOP LEFT PANEL – Image Slideshow (lg+) ── */}
                        <div className="hidden lg:flex lg:w-[62%] bg-black relative group flex-shrink-0">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeImageIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    {project.images?.[activeImageIndex] && (
                                        <img
                                            src={project.images[activeImageIndex]}
                                            alt="Project showcase"
                                            className="w-full h-full object-contain"
                                        />
                                    )}
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation arrows */}
                            <div className="absolute inset-0 flex items-center justify-between p-4">
                                <button
                                    onClick={handlePrevImage}
                                    className="p-2.5 bg-black border-2 border-black text-white rounded-full hover:bg-gray-900 transition-all flex items-center justify-center"
                                >
                                    <ChevronLeft size={22} strokeWidth={2.5} />
                                </button>
                                <button
                                    onClick={handleNextImage}
                                    className="p-2.5 bg-black border-2 border-black text-white rounded-full hover:bg-gray-900 transition-all flex items-center justify-center"
                                >
                                    <ChevronRight size={22} strokeWidth={2.5} />
                                </button>
                            </div>

                            {/* Counter */}
                            {project.images && project.images.length > 0 && (
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                    {project.images.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveImageIndex(i)}
                                            className={`rounded-full transition-all duration-300 ${
                                                i === activeImageIndex
                                                    ? 'w-5 h-2 bg-white'
                                                    : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                                            }`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* ── MOBILE TOP IMAGE CAROUSEL (below lg) ── */}
                        <div className="lg:hidden relative w-full h-52 sm:h-64 bg-black flex-shrink-0">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeImageIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0"
                                >
                                    {project.images?.[activeImageIndex] && (
                                        <img
                                            src={project.images[activeImageIndex]}
                                            alt="Project showcase"
                                            className="w-full h-full object-contain"
                                        />
                                    )}
                                </motion.div>
                            </AnimatePresence>

                            <button
                                onClick={handlePrevImage}
                                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black border-2 border-black text-white rounded-full hover:bg-gray-900 transition-all flex items-center justify-center"
                            >
                                <ChevronLeft size={16} strokeWidth={2.5} />
                            </button>
                            <button
                                onClick={handleNextImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black border-2 border-black text-white rounded-full hover:bg-gray-900 transition-all flex items-center justify-center"
                            >
                                <ChevronRight size={16} strokeWidth={2.5} />
                            </button>

                            {project.images && project.images.length > 0 && (
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                                    {project.images.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveImageIndex(i)}
                                            className={`rounded-full transition-all duration-300 ${
                                                i === activeImageIndex
                                                    ? 'w-4 h-1.5 bg-white'
                                                    : 'w-1.5 h-1.5 bg-white/40'
                                            }`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* ── RIGHT / BOTTOM CONTENT PANEL ── */}
                        <div className="w-full lg:w-[38%] flex flex-col overflow-y-auto flex-1 min-h-0">
                            {/* Header */}
                            <div className="sticky top-0 bg-[var(--background)] z-20 flex items-center justify-between px-5 py-4 sm:p-6 border-b border-[var(--border-color)]">
                                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] main-title">
                                    {project.title}
                                </h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-[var(--card-bg)] rounded-full transition-colors flex-shrink-0"
                                >
                                    <X size={22} className="text-[var(--text-primary)]" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 px-5 py-5 sm:p-8 space-y-6 sm:space-y-8">
                                {project.problem && (
                                    <div>
                                        <h3 className="text-xs font-bold text-[var(--accent)] uppercase tracking-widest mb-2">Problem</h3>
                                        <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                                            {project.problem}
                                        </p>
                                    </div>
                                )}

                                {project.solution && (
                                    <div>
                                        <h3 className="text-xs font-bold text-[var(--accent)] uppercase tracking-widest mb-2">Solution</h3>
                                        <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                                            {project.solution}
                                        </p>
                                    </div>
                                )}

                                {project.features && project.features.length > 0 && (
                                    <div>
                                        <h3 className="text-xs font-bold text-[var(--accent)] uppercase tracking-widest mb-3">Features</h3>
                                        <div className="space-y-2.5">
                                            {project.features.map((feat, i) => (
                                                <div key={i} className="flex gap-3">
                                                    <CheckCircle2 size={15} className="text-[var(--accent)] mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-[var(--text-secondary)]">{feat}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {(project.mission || project.vision) && (
                                    <div className="space-y-5 pt-4 border-t border-[var(--border-color)]">
                                        {project.mission && (
                                            <div>
                                                <h3 className="text-xs font-bold text-[var(--accent)] uppercase tracking-widest mb-2">Mission</h3>
                                                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">{project.mission}</p>
                                            </div>
                                        )}
                                        {project.vision && (
                                            <div>
                                                <h3 className="text-xs font-bold text-[var(--accent)] uppercase tracking-widest mb-2">Vision</h3>
                                                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">{project.vision}</p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {project.values && project.values.length > 0 && (
                                    <div>
                                        <h3 className="text-xs font-bold text-[var(--accent)] uppercase tracking-widest mb-3">Values</h3>
                                        <div className="grid grid-cols-2 gap-2">
                                            {project.values.map((val, i) => (
                                                <div key={i} className="p-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg text-xs sm:text-sm font-semibold text-[var(--text-secondary)]">
                                                    {val}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="sticky bottom-0 bg-[var(--background)] border-t border-[var(--border-color)] px-5 py-4 sm:p-6 flex gap-3">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 px-5 py-3 bg-[var(--accent)] text-white font-bold rounded-lg hover:bg-[var(--accent-secondary)] transition-all flex items-center justify-center gap-2 text-sm"
                                >
                                    {project.telegramBot ? 'Open in Telegram' : 'Visit Project'}
                                    <ExternalLink size={15} />
                                </a>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-3 border border-[var(--border-color)] text-[var(--text-primary)] font-bold rounded-lg hover:bg-[var(--card-bg)] transition-all flex items-center justify-center gap-2"
                                    >
                                        <Github size={16} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
