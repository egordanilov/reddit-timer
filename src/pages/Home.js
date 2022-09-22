import React from 'react';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';

export default function Home() {
  return (
    <section className="viewWrapper">
      Home page
      <HowItWorks />
      <About />
    </section>
  );
}
