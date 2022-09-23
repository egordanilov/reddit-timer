import React from 'react';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <section className="viewWrapper">
      <HeroSection />
      Home page
      <HowItWorks />
      <About />
    </section>
  );
}
