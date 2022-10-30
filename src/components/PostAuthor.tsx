/* eslint-disable */

import React from 'react';

interface PostAuthorProps {
    postAuthor: string;
};

function PostAuthor({ postAuthor }:PostAuthorProps) {
    return <a href={`https://reddit.com/u/${postAuthor}`} target="_blank" rel="noopener noreferrer">{postAuthor}</a>;
}

export default PostAuthor;
