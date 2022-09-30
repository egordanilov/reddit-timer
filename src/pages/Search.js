import React from 'react';
import SubredditForm from '../components/SubredditForm';
import HeatMap from '../components/HeatMap';

export default function Search() {
  return (
    <section className="viewWrapper">
      <SubredditForm />
      <HeatMap />
    </section>
  );
}
