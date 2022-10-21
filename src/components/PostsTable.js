/* eslint-disable */
import React from 'react';
import {
  shape, arrayOf, number, string, bool,
} from 'prop-types';
import { getPostsByDayHour } from '../hooks/useFetchPosts';
import PostAuthor from './PostAuthor';
import * as S from '../styles/PostsTable.style';

function PostsTable({ activeCell, posts }) {
  if (posts === []) return <></>;
  const filteredPostList = getPostsByDayHour(posts, activeCell.day, activeCell.hour);
  const postsToRender = filteredPostList.map((post) => {
    const date = new Date(post.created_utc * 1000);
    function formatAMPM(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }
    return (
      <S.PostsTableRow key={`${post.permalink} ${activeCell.day} ${activeCell.hour}`}>
        <S.PostsTableCell><a href={`https://reddit.com${post.permalink}`} target="_blank" rel="noopener noreferrer">{post.title}</a></S.PostsTableCell>
        <S.PostsTableCell>{formatAMPM(date)}</S.PostsTableCell>
        <S.PostsTableCell>{post.upvotes}</S.PostsTableCell>
        <S.PostsTableCell>{post.num_comments}</S.PostsTableCell>
        <S.PostsTableCell><PostAuthor post={post} /></S.PostsTableCell>
      </S.PostsTableRow>
    )
  }
  );
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
          {postsToRender}
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
      permalink: string,
      author_is_blocked: bool,
    }),
  ).isRequired,
  activeCell: shape({
    day: number,
    hour: number,
  }).isRequired,
};

export default PostsTable;
