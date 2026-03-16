import React from 'react';
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-maroon text-brand-cream pt-16 pb-8 border-t-4 border-brand-gold">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-gold bg-brand-ivory flex items-center justify-center">
                <img src="./logo.jpeg" alt="Saraswath Caterers Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-serif text-2xl font-bold text-brand-gold">
                Saraswath Caterers
              </span>
            </a>
            <p className="text-brand-cream/80 font-sans leading-relaxed mb-6">
              Premium Culinary Experiences rooted in Coastal Karnataka, Udupi, and Konkani heritage. Pure Vegetarian masterpieces for your grandest occasions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-maroon transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-maroon transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-maroon transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold text-brand-gold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-gold"></span>
            </h3>
            <ul className="flex flex-col gap-3 font-sans">
              <li><a href="#about" className="hover:text-brand-gold transition-colors flex items-center gap-2"><span className="text-brand-gold text-xs">◆</span> About Us</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors flex items-center gap-2"><span className="text-brand-gold text-xs">◆</span> Our Services</a></li>
              <li><a href="#menu" className="hover:text-brand-gold transition-colors flex items-center gap-2"><span className="text-brand-gold text-xs">◆</span> Menu Highlights</a></li>
              <li><a href="#testimonials" className="hover:text-brand-gold transition-colors flex items-center gap-2"><span className="text-brand-gold text-xs">◆</span> Testimonials</a></li>
              <li><a href="#contact" className="hover:text-brand-gold transition-colors flex items-center gap-2"><span className="text-brand-gold text-xs">◆</span> Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-bold text-brand-gold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-gold"></span>
            </h3>
            <ul className="flex flex-col gap-4 font-sans text-brand-cream/90">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-gold shrink-0 mt-1" size={20} />
                <span>123 Heritage Lane, Udupi District, Karnataka, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-gold shrink-0" size={20} />
                <a href="tel:+919876543210" className="hover:text-brand-gold transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-gold shrink-0" size={20} />
                <a href="mailto:hello@saraswathcaterers.com" className="hover:text-brand-gold transition-colors">hello@saraswathcaterers.com</a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-serif text-xl font-bold text-brand-gold mb-6 relative inline-block">
              Business Hours
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-gold"></span>
            </h3>
            <ul className="flex flex-col gap-3 font-sans text-brand-cream/90 text-sm">
              <li className="flex justify-between border-b border-brand-red/30 pb-2">
                <span>Monday - Friday</span>
                <span className="text-brand-gold">9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-brand-red/30 pb-2">
                <span>Saturday</span>
                <span className="text-brand-gold">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday</span>
                <span className="text-brand-gold text-xs md:text-sm">Available for Events</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-red/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-sans text-brand-cream/60">
          <p>&copy; {new Date().getFullYear()} Saraswath Caterers. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
