import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchPosts from '../hooks/useFetchPosts';
import SubredditForm from '../components/SubredditForm';
import defaultSubreddit from '../sharedVariables';
// import LoadingSpinner from '../styles/LoadingSpinner.style';

export default function Search() {
  const { subreddit = defaultSubreddit } = useParams();
  const fetchPosts = useFetchPosts(subreddit);
  return (
    <section className="viewWrapper">
      <SubredditForm />
      {JSON.stringify(fetchPosts.isLoaded)}
      <br />
      {JSON.stringify(fetchPosts.posts)}
    </section>
  );
}
