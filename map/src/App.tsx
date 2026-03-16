import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import MenuHighlights from './components/MenuHighlights';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-offwhite font-sans text-gray-800 antialiased selection:bg-brand-gold selection:text-brand-maroon overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <MenuHighlights />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
