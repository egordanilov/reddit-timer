import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaultSubreddit from '../sharedVariables';
import LoadingSpinner from '../styles/LoadingSpinner.style';
/* eslint-disable */
function LoadTheData() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const { subreddit = defaultSubreddit } = useParams();
  const [after, setAfter] = useState('');
  
  const memoizedFetch = useCallback(() => {
    const url = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100` + `&after=` + after;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPosts([...posts, data.data.children]);
        console.log('Fetch completed');
        console.log('Length of posts is ', posts.length)
        console.log(data.data);
        setAfter(data.data.after);
        console.log(after);
      },
      (err) => {
        setIsLoaded(true);
        setError(err);
      });
  }, [after]);

  useEffect(() => {
    setIsLoaded(false);
    setError(null);
    if (posts.length < 5) {
      memoizedFetch();
    } else {
      setIsLoaded(true);
    }
    console.log('completed fetching', posts);
  }, [subreddit, after]);

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
