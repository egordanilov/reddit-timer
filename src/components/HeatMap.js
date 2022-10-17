import React, { useState } from 'react';
import { bool, array } from 'prop-types';
import * as S from '../styles/HeatMapWrapper.style';
import LoadingSpinner from '../styles/LoadingSpinner.style';
import WeekdayRows from './WeekdayRows';
import { sortPostList } from '../hooks/useFetchPosts';
import { hours } from '../sharedVariables';

function HeatMap({ fetchedPosts, isLoaded, error }) {
  const transformedPosts = sortPostList(fetchedPosts);
  const [activeCell, setActiveCell] = useState({
    day: 'Sunday',
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
  if (error) {
    return (
      <>
        Failed to fetch, check internet connection and subreddit name
      </>
    );
  }
  /* loading spinner while posts still being fetched */
  if (!isLoaded) {
    return (
      <LoadingSpinner />
    );
  }

  return (
    <>
      <S.HeatMapWrapper>
        <S.HeatMapHeader>
          <S.HeatMapHeaderHourWrapper>
            {headerHours}
          </S.HeatMapHeaderHourWrapper>
        </S.HeatMapHeader>

        <S.HeatMapBody>
          <WeekdayRows
            listOfPosts={transformedPosts}
            clickHandler={dayHourClickHandler}
            activeCell={activeCell}
          />
        </S.HeatMapBody>
      </S.HeatMapWrapper>
      <S.HeatMapTimeZone>
        All times are shown in your timezone:
        <S.TimeZoneBold>{` ${Intl.DateTimeFormat().resolvedOptions().timeZone}`}</S.TimeZoneBold>
      </S.HeatMapTimeZone>
    </>
  );
}

HeatMap.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  fetchedPosts: array.isRequired,
  isLoaded: bool.isRequired,
  // eslint-disable-next-line react/require-default-props, react/forbid-prop-types
  error: bool,
};

export default HeatMap;
