import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const menuItems = [
  {
    id: 1,
    title: "Traditional Banana Leaf Thali",
    category: "Signature Feast",
    description: "A luxurious multi-course meal served on a fresh banana leaf. Experience authentic Konkani flavors including Dalithoy, Pineapple Menaskai, and pure ghee sweets.",
    image: "/images/menu_thali.png"
  },
  {
    id: 2,
    title: "Premium Live Dosa Counters",
    category: "Interactive Stations",
    description: "Mouth-watering golden crispy dosas made live. Featuring Neer Dosa, Mysore Masala, and traditional Udupi style accompanying chutneys.",
    image: "/images/menu_dosa.png"
  },
  {
    id: 3,
    title: "Authentic Sweets & Desserts",
    category: "Sweet Endings",
    description: "Delight your guests with heritage sweets like Hayagreeva Maddi, Kashi Halwa, perfectly balanced Payasams, and modern pure-veg desserts.",
    image: "/images/about_buffet.png"
  }
];

const MenuHighlights: React.FC = () => {
  return (
    <Section id="menu" className="bg-brand-maroon text-brand-cream py-24 overflow-hidden relative">
      {/* Decorative BG pattern faint */}
      <div 
        className="absolute inset-0 z-0 opacity-5 mix-blend-color-dodge"
        style={{
          backgroundImage: 'url(/images/hero_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <motion.h2 
              className="text-brand-gold font-sans font-bold tracking-widest uppercase text-sm mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Culinary Masterpieces
            </motion.h2>
            <motion.h3 
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Menu Highlights
            </motion.h3>
          </div>
          <motion.a
            href="#contact"
            className="px-8 py-4 rounded-full border-2 border-brand-gold text-brand-gold font-bold hover:bg-brand-gold hover:text-brand-maroon transition-all transform hover:-translate-y-1 whitespace-nowrap inline-flex items-center text-lg shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Download Full Menu
          </motion.a>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
             <motion.div 
               key={item.id}
               className="group relative rounded-2xl overflow-hidden bg-brand-ivory text-gray-800 shadow-2xl"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.5, delay: index * 0.15 }}
             >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute top-4 right-4 z-10 px-4 py-1.5 bg-brand-cream/90 backdrop-blur-md rounded-full text-brand-maroon font-extrabold text-xs uppercase tracking-wider shadow-sm">
                    {item.category}
                  </div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h4 className="font-serif text-2xl font-bold text-brand-maroon mb-4">
                    {item.title}
                  </h4>
                  <p className="font-sans text-gray-600 leading-relaxed mb-6 font-medium">
                    {item.description}
                  </p>
                </div>
                {/* Gold hover decorative bottom bar */}
                <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-brand-gold transition-all duration-500 group-hover:w-full" />
             </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default MenuHighlights;
