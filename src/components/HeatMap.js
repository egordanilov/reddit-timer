import React, { useState } from 'react';
import {
  bool,
  string,
  arrayOf,
  number,
  shape,
} from 'prop-types';
import * as S from '../styles/HeatMapWrapper.style';
import LoadingSpinner from '../styles/LoadingSpinner.style';
import WeekdayRows from './WeekdayRows';
import PostsTable from './PostsTable';
import { hours } from '../sharedVariables';

function HeatMap({
  fetchedPosts, isLoaded, error, structuredPostList,
}) {
  const [activeCell, setActiveCell] = useState({
    day: 0,
    hour: 12,
  });
  function dayHourClickHandler(weekDay, hour) {
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
      <S.HeatMapWrapper data-testid="heatmap">
        <S.HeatMapHeader>
          <S.HeatMapHeaderHourWrapper>
            {headerHours}
          </S.HeatMapHeaderHourWrapper>
        </S.HeatMapHeader>

        <S.HeatMapBody>
          <WeekdayRows
            listOfPosts={fetchedPosts}
            clickHandler={dayHourClickHandler}
            activeCell={activeCell}
          />
        </S.HeatMapBody>
      </S.HeatMapWrapper>
      <S.HeatMapTimeZone data-testid="timezone">
        All times are shown in your timezone:
        <S.TimeZoneBold>{` ${Intl.DateTimeFormat().resolvedOptions().timeZone}`}</S.TimeZoneBold>
      </S.HeatMapTimeZone>
      <PostsTable activeCell={activeCell} posts={structuredPostList} />
    </>
  );
}

HeatMap.propTypes = {
  fetchedPosts: arrayOf(arrayOf(number)).isRequired,
  isLoaded: bool.isRequired,
  error: string.isRequired,
  structuredPostList: arrayOf(
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
};

export default HeatMap;
