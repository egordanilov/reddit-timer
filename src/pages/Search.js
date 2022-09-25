import React from 'react';
import { useParams } from 'react-router-dom';
import SubredditForm from '../components/SubredditForm';

export default function Search() {
  const { subreddit = 'javascript' } = useParams();
  return (
    <section className="viewWrapper">
      <SubredditForm />
      Search page
      {subreddit}
    </section>
  );
}
