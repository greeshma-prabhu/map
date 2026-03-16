import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Menu', href: '#menu' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-brand-cream/95 backdrop-blur-sm shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-gold bg-brand-ivory flex items-center justify-center">
            {/* Real Logo placeholder */}
            <img src="./logo.jpeg" alt="Saraswath Caterers Logo" className="w-full h-full object-cover" />
          </div>
          <span className={`font-serif text-2xl font-bold ${isScrolled ? 'text-brand-maroon' : 'text-white drop-shadow-md'}`}>
            Saraswath Caterers
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`font-sans font-medium transition-colors hover:text-brand-gold ${
                    isScrolled ? 'text-gray-800' : 'text-white drop-shadow-sm'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className={`px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 ${
              isScrolled
                ? 'bg-brand-maroon text-white hover:bg-brand-red'
                : 'bg-brand-gold text-brand-maroon hover:bg-yellow-400'
            }`}
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2  ${isScrolled ? 'text-brand-maroon' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-cream shadow-xl border-t border-brand-gold/20 py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-gray-800 hover:text-brand-maroon font-serif text-lg py-2 border-b border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 block text-center px-6 py-3 bg-brand-maroon text-white rounded-full font-bold text-lg hover:bg-brand-red transition-colors"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
