"use client";
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Globe, Wrench, Globe2 } from 'lucide-react';

const services = [
  {
    title: "Website Development",
    icon: <Globe2 size={20} />,
    description: "Modern, responsive websites built with the latest technologies. From landing pages to complex web applications.",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Modern UI/UX"],
  },
  {
    title: "Mobile Applications",
    icon: <Smartphone size={20} />,
    description: "Cross-platform mobile applications using Flutter and React Native. Native performance for iOS and Android.",
    features: ["Flutter Development", "React Native", "Cross-Platform", "App Store Deployment"],
  },
  {
    title: "Technology Solutions",
    icon: <Wrench size={20} />,
    description: "Comprehensive technology solutions to streamline your business operations and improve efficiency.",
    features: ["System Integration", "API Development", "Cloud Solutions", "Technical Consulting"],
  },
  {
    title: "Chapa Integration",
    icon: <CreditCard size={20} />,
    description: "Seamless payment gateway integration for Ethiopian businesses. Secure transactions with local currency support.",
    features: ["Web & Mobile Payments", "Bank Transfer Support", "Real-time Webhooks", "Secure API Integration"],
  },
  {
    title: "M-Pesa Integration",
    icon: <Smartphone size={20} />,
    description: "Mobile money integration for seamless transactions across East Africa. Fast, reliable, and user-friendly.",
    features: ["STK Push Payments", "C2B & B2C Transactions", "Balance Inquiry", "Transaction History"],
  },
  {
    title: "Telebirr Integration",
    icon: <Globe size={20} />,
    description: "Ethio Telecom's mobile payment solution for digital transactions. Easy integration for businesses of all sizes.",
    features: ["QR Code Payments", "Bill Payments", "Merchant Services", "Instant Notifications"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 border-t border-[var(--border-color)]">
      <div className="container mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="accent-line mb-4 mx-auto" />
          <h2 className="main-title text-5xl md:text-7xl lg:text-8xl text-[var(--text-primary)]">
            Services
          </h2>
          <p className="text-[var(--text-secondary)] text-base font-medium max-w-xl mx-auto mt-4">
            What I can build for your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="service-card group bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-8"
            >
              <div className="w-10 h-10 rounded-xl bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] flex items-center justify-center text-[var(--accent)] mb-5">
                {service.icon}
              </div>

              <h3 className="text-base font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-200">
                {service.title}
              </h3>

              <p className="text-[var(--text-secondary)] mb-5 text-sm leading-relaxed font-medium">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs font-semibold text-[var(--text-secondary)] bg-[var(--accent)]/10 border border-[var(--accent)]/25 rounded px-3 py-1"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[var(--text-muted)] text-xs tech-text mt-10 tracking-widest">
          Secure · Reliable · Local
        </p>
      </div>
    </section>
  );
};

export default Services;
