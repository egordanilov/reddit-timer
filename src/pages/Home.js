import React from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';

export default function Home() {
  return (
    <section className="viewWrapper">
      <HeroSection />
      <InfoSection />
    </section>
  );
}
