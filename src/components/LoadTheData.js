import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaultSubreddit from '../sharedVariables';
import LoadingSpinner from '../styles/LoadingSpinner.style';

function LoadTheData() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const { subreddit = defaultSubreddit } = useParams();

  useEffect(() => {
    setIsLoaded(false);
    setPosts([]);
    setError(null);
    fetch(`https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoaded(true);
        setPosts(data.data.children);
        console.log(data.data.children);
      },
      (err) => {
        setIsLoaded(true);
        setError(err);
      });
  }, [subreddit]);

  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }
  if (!isLoaded) {
    return <LoadingSpinner />;
  }
  if (isLoaded) {
    return (JSON.stringify(posts));
  }
}

export default LoadTheData;
