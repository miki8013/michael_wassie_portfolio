"use client";
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Shield, Globe, Wrench, Globe2, Monitor } from 'lucide-react';

const services = [
    {
        title: "Website Development",
        icon: <Globe2 className="text-[var(--accent)]" size={22} />,
        description: "Modern, responsive websites built with the latest technologies. From landing pages to complex web applications.",
        features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Modern UI/UX"]
    },
    {
        title: "Mobile Applications",
        icon: <Smartphone className="text-[var(--accent)]" size={22} />,
        description: "Cross-platform mobile applications using Flutter and React Native. Native performance for iOS and Android.",
        features: ["Flutter Development", "React Native", "Cross-Platform", "App Store Deployment"]
    },
    {
        title: "Technology Solutions",
        icon: <Wrench className="text-[var(--accent)]" size={22} />,
        description: "Comprehensive technology solutions to streamline your business operations and improve efficiency.",
        features: ["System Integration", "API Development", "Cloud Solutions", "Technical Consulting"]
    },
    {
        title: "Chapa Integration",
        icon: <CreditCard className="text-[var(--accent)]" size={22} />,
        description: "Seamless payment gateway integration for Ethiopian businesses. Secure transactions with local currency support.",
        features: ["Web & Mobile Payments", "Bank Transfer Support", "Real-time Webhooks", "Secure API Integration"]
    },
    {
        title: "M-Pesa Integration",
        icon: <Smartphone className="text-[var(--accent)]" size={22} />,
        description: "Mobile money integration for seamless transactions across East Africa. Fast, reliable, and user-friendly.",
        features: ["STK Push Payments", "C2B & B2C Transactions", "Balance Inquiry", "Transaction History"]
    },
    {
        title: "Telebirr Integration",
        icon: <Globe className="text-[var(--accent)]" size={22} />,
        description: "Ethio Telecom's mobile payment solution for digital transactions. Easy integration for businesses of all sizes.",
        features: ["QR Code Payments", "Bill Payments", "Merchant Services", "Instant Notifications"]
    }
];

const Services = () => {
    return (
        <section id="services" className="py-10 px-6 bg-[var(--background)] border-t border-[var(--border-color)]">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-10 space-y-1 text-center"
                >
                    <h2 className="main-title text-5xl md:text-7xl lg:text-8xl text-[var(--text-primary)]">
                        Services
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg font-medium max-w-2xl mx-auto mt-4">
                        What I can build for your business
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-gradient-to-br from-[var(--card-bg)] to-[var(--card-bg)]/50 border border-[var(--border-color)] rounded-2xl p-8 hover:border-[var(--accent)] hover:shadow-2xl hover:shadow-[var(--accent)]/10 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/0 via-[var(--accent)]/5 to-[var(--accent)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                            
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--accent)]/20 transition-colors duration-300">
                                    <div className="text-[var(--accent)] transition-colors duration-300">
                                        {service.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-[var(--text-secondary)] mb-6 text-[15px] leading-relaxed font-medium">
                                    {service.description}
                                </p>

                                <div className="space-y-2">
                                    {service.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]/60" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-10 text-center"
                >
                    <p className="text-[var(--text-muted)] text-sm font-medium">
                        Secure • Reliable • Local
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
