/* eslint-disable */

import React from 'react';

function PostAuthor({ post }) {
    return <a href={`https://reddit.com/user/${post.author}`}>{post.author}</a>;
}

export default PostAuthor;
