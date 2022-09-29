import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaultSubreddit from '../sharedVariables';
import LoadingSpinner from '../styles/LoadingSpinner.style';
/* eslint-disable */

function LoadTheData() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const { subreddit = defaultSubreddit} = useParams();


  useEffect(() => {
    console.log('useEffect has been running, subreddit is',subreddit);
    setIsLoaded(false);
    setPosts([]);
    setError(null);
    fetch(`https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`)
      .then((res) => res.json())
      .then((data) => 
        {
        setIsLoaded(true);
        setPosts(data.data.children);
        console.log(data.data.children);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
      );
  }, [subreddit]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <LoadingSpinner />;
  } else {
    return (JSON.stringify(posts));
  }
}


export default LoadTheData;
