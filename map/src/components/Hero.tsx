import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-cream/80"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url(/images/hero_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-maroon/10 via-brand-cream/60 to-brand-cream/95" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-5xl">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-brand-gold font-sans font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-6 drop-shadow-sm">
            Premium Culinary Experiences
          </h2>
        </motion.div>

        <motion.h1 
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-brand-maroon leading-tight mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          Authentic <span className="text-brand-red decoration-brand-gold underline decoration-4 underline-offset-8">Pure Veg</span> Culinary Masterpieces <br className="hidden md:block"/> 
          for Your Grandest Occasions
        </motion.h1>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a 
            href="#menu" 
            className="w-full sm:w-auto px-8 py-4 bg-brand-maroon text-brand-cream rounded-full font-bold text-lg hover:bg-brand-red hover:shadow-lg hover:shadow-brand-maroon/30 transition-all transform hover:-translate-y-1"
          >
            Explore Our Menus
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 bg-brand-cream border-2 border-brand-maroon text-brand-maroon rounded-full font-bold text-lg hover:bg-brand-maroon hover:text-brand-cream hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-cream to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;
