import React from 'react';
import { useParams } from 'react-router-dom';
import SubredditForm from '../components/SubredditForm';

export default function Search() {
  const { subreddit = 'javascript' } = useParams();
  const [subredditInput, setSubredditInput] = React.useState(subreddit);
  return (
    <section className="viewWrapper">
      <SubredditForm subreddit={subredditInput} changeHandler={setSubredditInput} />
      Search page
      {subreddit}
    </section>
  );
}
