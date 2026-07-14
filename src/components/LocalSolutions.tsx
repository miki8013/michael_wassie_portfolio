"use client";
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Globe, Wrench, Globe2 } from 'lucide-react';

const services = [
  {
    title: "Website Development",
    icon: <Globe2 size={20} />,
    description: "I build websites that actually work. Fast, clean, and built to grow with your business. Whether you need a landing page or a full web app, I handle it from design to deployment.",
  },
  {
    title: "Mobile Applications",
    icon: <Smartphone size={20} />,
    description: "Cross-platform apps using Flutter and React Native that feel native on both iOS and Android. I take your idea from wireframe to the app store.",
  },
  {
    title: "Technology Consulting",
    icon: <Wrench size={20} />,
    description: "Not sure what stack to use or how to structure your system? I help businesses make smart technical decisions. APIs, cloud setup, integrations, the works.",
  },
  {
    title: "Chapa Integration",
    icon: <CreditCard size={20} />,
    description: "Get your Ethiopian business accepting payments online. I integrate Chapa into your web or mobile app so your customers can pay with local banks and mobile wallets, no friction.",
  },
  {
    title: "M-Pesa Integration",
    icon: <Smartphone size={20} />,
    description: "Reach customers across East Africa with M-Pesa. I wire up STK push, business pay-outs, and transaction callbacks so money moves smoothly in your product.",
  },
  {
    title: "Telebirr Integration",
    icon: <Globe size={20} />,
    description: "Add Ethio Telecom's Telebirr as a payment option in your app or website. I handle the API setup, QR flows, and webhook handling end to end.",
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
          className="mb-14"
        >
          <span className="accent-line mb-4" />
          <h2 className="main-title text-5xl md:text-7xl lg:text-8xl text-[var(--text-primary)]">
            Services
          </h2>
          <p className="text-[var(--text-secondary)] text-base font-medium max-w-xl mt-4">
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

              <p className="text-[var(--text-secondary)] text-sm leading-relaxed font-medium">
                {service.description}
              </p>
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
