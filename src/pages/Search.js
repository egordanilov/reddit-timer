import React from 'react';
import { useParams } from 'react-router-dom';

export default function Search() {
  const { subreddit = 'javascript' } = useParams();
  return (
    <>
      Search page
      {subreddit}
    </>
  );
}
