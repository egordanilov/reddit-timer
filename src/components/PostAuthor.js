/* eslint-disable */

import React from 'react';

function PostAuthor({ post }) {
    return <a href={`https://reddit.com/u/${post.author}`}>{post.author}</a>;
}

export default PostAuthor;
