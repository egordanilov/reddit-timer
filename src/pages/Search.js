import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchPosts from '../hooks/useFetchPosts';
import SubredditForm from '../components/SubredditForm';
import HeatMap from '../components/HeatMap';
import defaultSubreddit from '../sharedVariables';

export default function Search() {
  const { subreddit = defaultSubreddit } = useParams();
  /* using a hook to fetch posts for current subreddit */
  const fetchPosts = useFetchPosts(subreddit);
  return (
    <section className="viewWrapper">
      <SubredditForm />
      <HeatMap
        fetchedPosts={fetchPosts.postsByDayHour}
        isLoaded={fetchPosts.isLoaded}
        error={fetchPosts.error}
        structuredPostList={fetchPosts.allPosts}
      />
    </section>
  );
}
