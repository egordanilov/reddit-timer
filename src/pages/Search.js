import React from 'react';
import SubredditForm from '../components/SubredditForm';
import LoadTheData from '../components/LoadTheData';

export default function Search() {
  return (
    <section className="viewWrapper">
      <SubredditForm />
      <LoadTheData />
    </section>
  );
}
