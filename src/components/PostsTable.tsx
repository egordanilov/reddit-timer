import React, {ReactElement} from 'react';
import PostAuthor from './PostAuthor';
import * as S from '../styles/PostsTable.style';
import { Post } from '../hooks/useFetchPosts';

interface PostsTableProps {
    activeCell: {
        day: number;
        hour: number;
    };
    posts: Post[];
}

function PostsTable({ activeCell, posts }:PostsTableProps):ReactElement {
  const sortedByTimePostedPostList = posts.sort(
    (a, b) => (a.date.getUTCMinutes() > b.date.getUTCMinutes() ? 1 : -1),
  );
  if (posts.length === 0) {
    return (
      <S.PostsTableWrapper>
        <br />
        <b>No posts at this day and hour, try clicking another cell in the Heatmap.</b>
      </S.PostsTableWrapper>
    );
  }
  const postsToRender = sortedByTimePostedPostList.map((post) => {
    function formatAMPM(date:Date) {
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'pm' : 'am';
      hours %= 12;
      // eslint-disable-next-line no-unneeded-ternary
      hours = hours ? hours : 12; // the hour '0' should be '12'
      let parsedMinutes: string = minutes.toString();
      if (minutes < 10) {
        parsedMinutes = `0${parsedMinutes}`;
      }
      const strTime = `${hours}:${parsedMinutes} ${ampm}`;
      return strTime;
    }
    return (
      <S.PostsTableRow key={`${post.permalink} ${activeCell.day} ${activeCell.hour}`}>
        <S.PostsTableCell><a href={`https://reddit.com${post.permalink}`} target="_blank" rel="noopener noreferrer">{post.title}</a></S.PostsTableCell>
        <S.PostsTableCell>{formatAMPM(post.date)}</S.PostsTableCell>
        <S.PostsTableCell>{post.upvotes}</S.PostsTableCell>
        <S.PostsTableCell>{post.num_comments}</S.PostsTableCell>
        <S.PostsTableCell>{post.author === '[deleted]' ? post.author : <PostAuthor postAuthor={post.author} />}</S.PostsTableCell>
      </S.PostsTableRow>
    );
  });
  return (
    <>
      <S.PostsTableWrapper>
        <S.PostsTableHeading>Posts</S.PostsTableHeading>
      </S.PostsTableWrapper>
      <S.PostsOverflowContainer>
        <S.PostsTableWrapper>
          <S.PostsTable>
            <S.PostsCaption>
              All posts by Weekday and Hour will appear here
            </S.PostsCaption>
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
      </S.PostsOverflowContainer>
    </>
  );
}

export default PostsTable;
