import { useEffect, useState } from 'react';
/* eslint-disable */
function sortPostList(unsortedList) {
  const sortedList = unsortedList.map((post) => {
    const postDate = new Date(post.data.created_utc * 1000);
    const postDay = postDate.getDay();
    const postHour = postDate.getHours(); 
    const newPost = {
      title: post.data.title,
      created_utc: post.data.created_utc,
      postDay,
      postHour,
      upvotes: post.data.ups,
      author: post.data.author,
      num_comments: post.data.num_comments,
      url: post.data.url,
      author_is_blocked: post.data.author_is_blocked,
    }
    return newPost;
  });
  return sortedList;
}

async function fetchPaginatedPosts(subreddit, previousPosts = [], after = null) {
  let url = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`;
  if (after) {
    url += `&after=${after}`;
  }
  const response = await fetch(url);
  const { data } = await response.json();
  let allPosts = previousPosts.concat(data.children);
  const noMorePosts = data && data.dist < 100;
  const limitReached = allPosts.length >= 500;
  if (noMorePosts || limitReached) {
    allPosts = sortPostList(allPosts);
    return allPosts;
  }
  return fetchPaginatedPosts(subreddit, allPosts, data.after);
}

function useFetchPosts(subreddit) {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setPosts([]);
    setIsLoaded(false);
    setError(null);
    fetchPaginatedPosts(subreddit)
      .then((newPosts) => {
        setPosts(newPosts);
        setIsLoaded(true);
      })
      .catch((err) => {
        setError(err);
        setIsLoaded(true);
      });
  }, [subreddit]);
  return {
    posts,
    isLoaded,
    error,
  };
}

export default useFetchPosts;
