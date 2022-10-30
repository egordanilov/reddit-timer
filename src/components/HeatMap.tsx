import React, { useState } from 'react';
import * as S from '../styles/HeatMap.style';
import LoadingSpinner from '../styles/LoadingSpinner.style';
import WeekdayRows from './WeekdayRows';
import PostsTable from './PostsTable';
import { hours } from '../sharedVariables';

type Post = {
  title: string;
  created_utc: number;
  date: Date;
  postDay: number;
  postHour: number;
  upvotes: number;
  author: string;
  num_comments: number;
  permalink: string;
  author_is_blocked: boolean;
};

type TopLevel = Post[];
type Days = TopLevel[];

type FetchedPosts = Days[];

interface HeatMapProps {
  fetchedPosts: FetchedPosts;
  isLoaded: boolean;
  error: string;
};

function HeatMap({
  fetchedPosts, isLoaded, error,
}:HeatMapProps) {
  const [activeCell, setActiveCell] = useState({
    day: 0,
    hour: 12,
  });
  function dayHourClickHandler(weekDay: number, hour: number) {
    setActiveCell({ day: weekDay, hour });
  }
  const headerHours = hours.map((hour) => (
    <S.HeatMapHeaderHour key={hour}>{hour}</S.HeatMapHeaderHour>
  ));

  /* Handle loading and errors here, return loading spinner or error message */
  /* display an error if any */
  if (error !== '') {
    return (
      <S.HeatMapError>
        Failed to fetch, check internet connection and subreddit name
      </S.HeatMapError>
    );
  }
  /* loading spinner while posts still being fetched */
  if (!isLoaded) {
    return (
      <LoadingSpinner data-testid="loading-spinner" />
    );
  }

  return (
    <>
      <S.HeatMapOverflowContainer>
        <S.HeatMapWrapper data-testid="heatmap">
          <S.HeatMapHeader>
            <S.HeatMapHeaderHourWrapper>
              {headerHours}
            </S.HeatMapHeaderHourWrapper>
          </S.HeatMapHeader>

          <S.HeatMapBody>
            <WeekdayRows
              listOfAllPosts={fetchedPosts}
              clickHandler={dayHourClickHandler}
              activeCell={activeCell}
            />
          </S.HeatMapBody>
        </S.HeatMapWrapper>
      </S.HeatMapOverflowContainer>

      <S.HeatMapTimeZone data-testid="timezone">
        All times are shown in your timezone:
        <S.TimeZoneBold>{` ${Intl.DateTimeFormat().resolvedOptions().timeZone}`}</S.TimeZoneBold>
      </S.HeatMapTimeZone>
      <PostsTable activeCell={activeCell} posts={fetchedPosts[activeCell.day][activeCell.hour]} />
    </>
  );
}

export default HeatMap;
