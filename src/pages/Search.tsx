import React, {ReactElement} from 'react';
import { useParams } from 'react-router-dom';
import useFetchPosts from '../hooks/useFetchPosts';
import Container from '../styles/Container.style';
import SubredditForm from '../components/SubredditForm';
import HeatMap from '../components/HeatMap';
import defaultSubreddit from '../sharedVariables';

export default function Search():ReactElement {
  const { subreddit = defaultSubreddit } = useParams();
  /* using a hook to fetch posts for current subreddit */
  const fetchPosts = useFetchPosts(subreddit);
  return (
    <Container>
      <SubredditForm />
      <HeatMap
        fetchedPosts={fetchPosts.postsByDayHour}
        isLoaded={fetchPosts.isLoaded}
        error={fetchPosts.error}
      />
    </Container>
  );
}
