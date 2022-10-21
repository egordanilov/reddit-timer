/* eslint-disable */

import React from 'react';

function PostAuthor({ post }) {
  if (post.author_is_blocked) {
    return '[deleted]';
  }
  return (
    <a href={`https://reddit.com/user/${post.author}`}>{post.author}</a>
  )
}

export default PostAuthor;
