"use client";
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Shield, Globe } from 'lucide-react';

const paymentSolutions = [
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

const LocalSolutions = () => {
    return (
        <section id="local-solutions" className="py-10 px-6 bg-[var(--background)]">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-10 space-y-1"
                >
                    <h2 className="main-title text-5xl md:text-7xl lg:text-8xl text-[var(--text-primary)]">
                        Local Payment Solutions
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg font-medium max-w-2xl mt-4">
                        Help integrate local payment solutions in your websites and applications for seamless transactions across Africa.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {paymentSolutions.map((solution, index) => (
                        <motion.div
                            key={solution.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="border-beam-wrapper rounded-2xl"
                        >
                            <div className="border-beam-effect" />
                            
                            <div className="card-inner-bg rounded-2xl p-8">
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="text-[var(--accent)] transition-colors duration-300">
                                        {solution.icon}
                                    </div>
                                    <h3 className="tech-text text-sm font-bold text-[var(--text-primary)]">
                                        {solution.title}
                                    </h3>
                                </div>

                                <p className="text-[var(--text-secondary)] mb-6 text-[15px] leading-relaxed font-medium">
                                    {solution.description}
                                </p>

                                <div className="space-y-3">
                                    {solution.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-3">
                                            <Shield size={14} className="text-[var(--accent)]/60" />
                                            <span className="text-sm text-[var(--text-secondary)] font-medium">
                                                {feature}
                                            </span>
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

export default LocalSolutions;
