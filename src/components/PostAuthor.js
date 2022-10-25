/* eslint-disable */

import React from 'react';

function PostAuthor({ post }) {
    return <a href={`https://reddit.com/u/${post.author}`} target="_blank" rel="noopener noreferrer">{post.author}</a>;
}

export default PostAuthor;
