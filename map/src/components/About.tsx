import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-brand-cream relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-brand-gold font-sans font-bold tracking-widest uppercase text-sm mb-4">Our Heritage</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon mb-6 leading-tight">
            Rooted in Tradition, Crafted with Perfection
          </h3>
          <p className="font-sans text-lg text-gray-800 leading-relaxed mb-6 font-medium">
            Saraswath Caterers brings the rich, authentic flavors of Coastal Karnataka, Udupi, and Konkani cuisine straight to your events. Our legacy is built on generations of culinary secrets, offering a true taste of our vibrant culture.
          </p>
          <p className="font-sans text-lg text-gray-700 leading-relaxed mb-10">
            We are strictly <strong className="text-brand-green font-bold text-xl drop-shadow-sm">Pure Vegetarian</strong>, using only the freshest, premium quality ingredients. From grand traditional weddings to intimate pujas, we craft experiences that linger in your memories and leave your guests delighted.
          </p>
          
          <div className="flex flex-wrap items-center gap-8 md:gap-12 p-6 bg-brand-offwhite rounded-2xl border border-brand-gold/30 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-ivory to-brand-cream opacity-50"></div>
            <div className="flex flex-col relative z-10">
              <span className="font-serif font-bold text-4xl text-brand-maroon mb-1">25+</span>
              <span className="font-sans text-xs font-bold text-brand-gold uppercase tracking-wider">Years of Legacy</span>
            </div>
            <div className="w-px h-16 bg-brand-gold/30 relative z-10 hidden sm:block" />
            <div className="flex flex-col relative z-10">
              <span className="font-serif font-bold text-4xl text-brand-maroon mb-1">10k+</span>
              <span className="font-sans text-xs font-bold text-brand-gold uppercase tracking-wider">Happy Guests</span>
            </div>
            <div className="w-px h-16 bg-brand-gold/30 relative z-10 hidden sm:block" />
             <div className="flex flex-col relative z-10">
              <span className="font-serif font-bold text-4xl text-brand-maroon mb-1">100%</span>
              <span className="font-sans text-xs font-bold text-brand-gold uppercase tracking-wider">Pure Veg Quality</span>
            </div>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl border-8 border-brand-ivory z-10 group">
            <img 
              src="/images/about_buffet.png" 
              alt="Grand traditional buffet setup" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
            />
            {/* Elegant overlay on image hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          {/* Decorative backdrop */}
          <div className="absolute -inset-4 bg-brand-gold/40 rounded-3xl transform rotate-3 -z-10 shadow-lg" />
          <div className="absolute -inset-6 bg-brand-maroon/20 rounded-3xl transform -rotate-2 -z-20" />
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
