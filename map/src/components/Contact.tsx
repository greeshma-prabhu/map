import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-brand-offwhite relative py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-brand-maroon/10">
          
          {/* Info Side */}
          <div className="lg:w-5/12 bg-brand-maroon text-brand-cream p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden">
             {/* Decorative pattern */}
             <div 
               className="absolute inset-0 opacity-10 mix-blend-color-dodge"
               style={{
                 backgroundImage: 'url(/images/hero_bg.png)',
                 backgroundSize: 'cover',
               }}
             />
             <div className="relative z-10">
               <motion.h3 
                 className="font-serif text-4xl lg:text-5xl font-bold text-brand-gold mb-6 leading-tight"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
               >
                 Let's Plan Your Grand Event
               </motion.h3>
               <motion.p 
                 className="font-sans text-brand-cream/80 text-lg leading-relaxed mb-10"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
               >
                 Fill out the form to discuss menus, themes, and how we can make your occasion extraordinarily delicious.
               </motion.p>
               <motion.div 
                 className="space-y-8"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
               >
                 <div className="border-l-4 border-brand-gold pl-4">
                   <h4 className="font-sans uppercase tracking-widest text-xs font-bold text-brand-gold mb-1">Direct Contact</h4>
                   <p className="font-serif text-2xl drop-shadow-sm">+91 98765 43210</p>
                 </div>
                 <div className="border-l-4 border-brand-gold pl-4">
                   <h4 className="font-sans uppercase tracking-widest text-xs font-bold text-brand-gold mb-1">Email</h4>
                   <p className="font-serif text-2xl drop-shadow-sm">hello@saraswathcaterers.com</p>
                 </div>
               </motion.div>
             </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-7/12 p-12 lg:p-16 bg-white relative">
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-sans text-sm font-bold text-brand-maroon uppercase tracking-wide">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-5 py-4 bg-brand-offwhite border-2 border-brand-cream rounded-xl focus:outline-none focus:ring-0 focus:border-brand-gold transition-all font-sans text-gray-800 placeholder-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="font-sans text-sm font-bold text-brand-maroon uppercase tracking-wide">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-5 py-4 bg-brand-offwhite border-2 border-brand-cream rounded-xl focus:outline-none focus:ring-0 focus:border-brand-gold transition-all font-sans text-gray-800 placeholder-gray-400"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="date" className="font-sans text-sm font-bold text-brand-maroon uppercase tracking-wide">Event Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    className="w-full px-5 py-4 bg-brand-offwhite border-2 border-brand-cream rounded-xl focus:outline-none focus:ring-0 focus:border-brand-gold transition-all font-sans text-gray-800"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="guests" className="font-sans text-sm font-bold text-brand-maroon uppercase tracking-wide">Guest Count</label>
                  <input 
                    type="number" 
                    id="guests" 
                    className="w-full px-5 py-4 bg-brand-offwhite border-2 border-brand-cream rounded-xl focus:outline-none focus:ring-0 focus:border-brand-gold transition-all font-sans text-gray-800 placeholder-gray-400"
                    placeholder="e.g. 250"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-sans text-sm font-bold text-brand-maroon uppercase tracking-wide">Event Details</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-5 py-4 bg-brand-offwhite border-2 border-brand-cream rounded-xl focus:outline-none focus:ring-0 focus:border-brand-gold transition-all font-sans resize-none text-gray-800 placeholder-gray-400"
                  placeholder="Tell us about your event, venue, and any specific culinary requirements..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-maroon text-brand-gold font-bold text-lg py-4 rounded-xl hover:bg-brand-red hover:text-white hover:shadow-xl hover:shadow-brand-maroon/30 transition-all transform hover:-translate-y-1 mt-6"
              >
                Request a Quote
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </Section>
  );
};

export default Contact;
