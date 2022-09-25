import React from 'react';
import { useParams } from 'react-router-dom';
import SubredditForm from '../components/SubredditForm';

export default function Search() {
  const { subreddit = 'javascript' } = useParams();
  return (
    <section className="viewWrapper">
      <SubredditForm />
      <br />
      <br />
      <br />
      <br />
      Search page
      {subreddit}
    </section>
  );
}
