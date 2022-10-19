import React from 'react';
import {
  shape, arrayOf, number, string, bool,
} from 'prop-types';
import { getPostsByDayHour } from '../hooks/useFetchPosts';
import PostsTableWrapper from '../styles/PostsTable.style';

function PostsTable({ activeCell, posts }) {
  if (posts === []) return <></>;
  const filteredPostList = getPostsByDayHour(posts, activeCell.day, activeCell.hour);
  const postsToRender = filteredPostList.map((post) => (
    <li key={`${post.url} ${activeCell.day} ${activeCell.hour}`}>
      {post.title}
      {post.date}
      {post.upvotes}
      {post.num_comments}
      {post.author}
    </li>
  ));
  return (
    <PostsTableWrapper>
      {postsToRender}
    </PostsTableWrapper>
  );
}

PostsTable.propTypes = {
  posts: arrayOf(
    shape({
      title: string,
      created_utc: number,
      postDay: number,
      postHour: number,
      upvotes: number,
      author: string,
      num_comments: number,
      url: string,
      author_is_blocked: bool,
    }),
  ).isRequired,
  activeCell: shape({
    day: number,
    hour: number,
  }).isRequired,
};

export default PostsTable;
