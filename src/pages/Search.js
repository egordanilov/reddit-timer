import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchPosts from '../hooks/useFetchPosts';
import SubredditForm from '../components/SubredditForm';
import defaultSubreddit from '../sharedVariables';
import LoadingSpinner from '../styles/LoadingSpinner.style';

export default function Search() {
  const { subreddit = defaultSubreddit } = useParams();
  const fetchPosts = useFetchPosts(subreddit);
  let fetchOutput = <></>;
  if (fetchPosts.error) {
    fetchOutput = <>Failed to fetch, check internet connection and subreddit name</>;
  }
  if (!fetchPosts.isLoaded) {
    fetchOutput = <LoadingSpinner />;
  }

  if (!fetchPosts.error && fetchPosts.isLoaded) {
    fetchOutput = JSON.stringify(fetchPosts.posts);
  }
  return (
    <section className="viewWrapper">
      <SubredditForm />
      {fetchOutput}
    </section>
  );
}
