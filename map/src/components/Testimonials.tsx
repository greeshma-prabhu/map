import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Section from './Section';

const testimonials = [
  {
    id: 1,
    name: "Priya & Rahul",
    event: "Wedding Reception",
    text: "Saraswath Caterers made our wedding a culinary dream! The authenticity of the Konkani dishes was appreciated by every single guest. The live dosa counter was a massive hit. Highly recommended for anyone wanting a premium pure veg experience."
  },
  {
    id: 2,
    name: "Anand Shet",
    event: "Housewarming Ceremony",
    text: "The food for our Gruhapravesha was sattvic, delicious, and presented so beautifully on banana leaves. Their team is extremely professional and the quality of the ingredients is evident in every bite of the Dalithoy and Payasam."
  },
  {
    id: 3,
    name: "Divya Kamat",
    event: "Corporate Annual Meet",
    text: "We hired them for our company's annual ethical business summit. The setup was incredibly opulent and the food was consistently excellent across all 500 plates. They redefined what pure vegetarian event catering can be."
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section id="testimonials" className="bg-brand-cream py-24">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-brand-gold font-sans font-bold tracking-widest uppercase text-sm mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Client Stories
        </motion.h2>
        <motion.h3 
          className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          What They Say
        </motion.h3>
        <div className="w-24 h-1 bg-brand-gold mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto relative px-4 md:px-12">
        <div className="absolute top-0 left-0 text-brand-gold/15 transform -translate-x-4 md:-translate-x-12 -translate-y-8 pointer-events-none">
          <Quote size={120} />
        </div>
        
        <div className="overflow-hidden relative min-h-[350px] md:min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center w-full z-10"
            >
              <p className="font-serif text-2xl md:text-3xl text-gray-800 leading-relaxed italic mb-10 drop-shadow-sm">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex flex-col items-center">
                <div className="w-16 h-1.5 bg-brand-gold mb-4 rounded-full shadow-sm" />
                <h4 className="font-sans font-bold text-brand-maroon text-xl">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="font-sans text-gray-500 uppercase tracking-wider text-xs md:text-sm mt-1 font-bold">
                  {testimonials[currentIndex].event}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-6 mt-12 z-20 relative">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-2 border-brand-maroon text-brand-maroon flex items-center justify-center hover:bg-brand-maroon hover:text-brand-cream transition-colors shadow-sm"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'bg-brand-maroon w-10 shadow-md' : 'bg-brand-maroon/30 w-3'
                }`}
              />
            ))}
          </div>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-2 border-brand-maroon text-brand-maroon flex items-center justify-center hover:bg-brand-maroon hover:text-brand-cream transition-colors shadow-sm"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
