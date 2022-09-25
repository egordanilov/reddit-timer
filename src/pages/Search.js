import React from 'react';
import { useParams } from 'react-router-dom';
import SubredditForm from '../components/SubredditForm';
import defaultSubreddit from '../sharedVariables';

export default function Search() {
  const { subreddit = defaultSubreddit } = useParams();
  const [subredditInput, setSubredditInput] = React.useState(subreddit);
  return (
    <section className="viewWrapper">
      <SubredditForm subreddit={subredditInput} changeHandler={setSubredditInput} />
    </section>
  );
}
