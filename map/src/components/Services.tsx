import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, Users, HeartHandshake } from 'lucide-react';
import Section from './Section';

const services = [
  {
    id: 1,
    title: "Grand Weddings",
    description: "Make your special day unforgettable with our opulent multi-course traditional wedding feasts. We handle everything from welcome drinks to the grand muhurtham thali.",
    icon: <HeartHandshake size={32} />,
    image: "/images/services_wedding.png",
  },
  {
    id: 2,
    title: "Corporate Events",
    description: "Impress your clients and team with our premium corporate catering. We offer elegant buffet setups, working lunches, and high-tea experiences.",
    icon: <Users size={32} />,
    image: "/images/hero_bg.png",
  },
  {
    id: 3,
    title: "Private Gatherings & Pujas",
    description: "Intimate settings require pure, sattvic food. We provide authentic, strictly vegetarian dishes perfect for pujas, housewarmings, and family milestones.",
    icon: <PartyPopper size={32} />,
    image: "/images/about_buffet.png",
  }
];

const Services: React.FC = () => {
  return (
    <Section id="services" className="bg-brand-offwhite relative">
      <div className="text-center mb-16 relative z-10">
        <motion.h2 
          className="text-brand-gold font-sans font-bold tracking-widest uppercase text-sm mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What We Do
        </motion.h2>
        <motion.h3 
          className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our Premium Services
        </motion.h3>
        <div className="w-24 h-1 bg-brand-gold mx-auto mt-8 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-brand-maroon/5 flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            {/* Image Container */}
            <div className="relative h-72 overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/90 via-brand-maroon/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 w-14 h-14 rounded-full bg-brand-gold text-brand-maroon flex items-center justify-center shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                {service.icon}
              </div>
            </div>

            {/* Content Container */}
            <div className="p-8 flex flex-col grow">
              <h4 className="font-serif text-2xl font-bold text-brand-maroon mb-4 group-hover:text-brand-red transition-colors flex items-center justify-between">
                {service.title}
              </h4>
              <p className="font-sans text-gray-600 leading-relaxed grow text-lg">
                {service.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-brand-maroon/10 flex items-center text-brand-gold font-bold uppercase text-sm group-hover:text-brand-maroon cursor-pointer transition-colors">
                <span>Learn More</span>
                <span className="ml-2 transform group-hover:translate-x-2 transition-transform border border-current rounded-full p-1"><PartyPopper size={14} className="opacity-0" /></span>
                <span className="absolute ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
