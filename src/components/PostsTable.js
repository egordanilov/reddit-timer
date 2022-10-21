/* eslint-disable */
import React from 'react';
import {
  shape, arrayOf, number, string, bool,
} from 'prop-types';
import { getPostsByDayHour } from '../hooks/useFetchPosts';
import * as S from '../styles/PostsTable.style';

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
    <S.PostsTableWrapper>
      <S.PostsTableHeading>Posts</S.PostsTableHeading>
      <S.PostsTable>
        <thead>
          <S.PostsTableRow>
            <S.PostTableHeaderCell>Title</S.PostTableHeaderCell>
            <S.PostTableHeaderCell>Time Posted</S.PostTableHeaderCell>
            <S.PostTableHeaderCell>Score</S.PostTableHeaderCell>
            <S.PostTableHeaderCell>Comments</S.PostTableHeaderCell>
            <S.PostTableHeaderCell>Author</S.PostTableHeaderCell>
          </S.PostsTableRow>
        </thead>
        <tbody>
          <S.PostsTableRow>
            <S.PostsTableCell>The new Babel release gives support for ECMAscript this line needs to be shortened</S.PostsTableCell>
            <S.PostsTableCell>2:02am</S.PostsTableCell>
            <S.PostsTableCell>270</S.PostsTableCell>
            <S.PostsTableCell>23</S.PostsTableCell>
            <S.PostsTableCell>Abazithisneedstobeshortened</S.PostsTableCell>
          </S.PostsTableRow>
        </tbody>
      </S.PostsTable>
    </S.PostsTableWrapper>
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
