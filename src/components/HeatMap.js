import React, { useState, useMemo } from 'react';
import { bool, string, array } from 'prop-types';
import * as S from '../styles/HeatMapWrapper.style';
import LoadingSpinner from '../styles/LoadingSpinner.style';
import { getPostsByDayHour, sortPostList } from '../hooks/useFetchPosts';
import { weekdays, hours, utcHours } from '../sharedVariables';

function HeatMap({ fetchedPosts, isLoaded, error }) {
  const transformedPosts = useMemo(() => sortPostList(fetchedPosts), [fetchedPosts]);
  const [selectedDayHour, setSelectedDayHour] = useState('');
  function dayHourClickHandler(weekDay, hour) {
    setSelectedDayHour(`${weekDay} ${hour}`);
    console.log(getPostsByDayHour(transformedPosts, weekDay, hour));
  }
  const headerHours = hours.map((hour) => (
    <S.HeatMapHeaderHour key={hour}>{hour}</S.HeatMapHeaderHour>
  ));

  const heatMapRows = weekdays.map((weekDay) => {
    const postsByHour = utcHours.map((hour) => (
      <S.HeatMapRowNumber
        key={`${weekDay} ${hour}`}
        numberOfPosts={getPostsByDayHour(transformedPosts, weekDay, hour).length}
        selected={`${weekDay} ${hour}` === selectedDayHour}
        onClick={() => { dayHourClickHandler(weekDay, hour); }}
      >
        {getPostsByDayHour(transformedPosts, weekDay, hour).length}
      </S.HeatMapRowNumber>
    ));
    return (
      <S.HeatMapRow key={weekDay}>
        <S.HeatMapRowWeekday>
          {weekDay}
        </S.HeatMapRowWeekday>
        {postsByHour}
      </S.HeatMapRow>
    );
  });
  /* display an error if any */
  if (error) {
    return (
      <>
        Failed to fetch, check internet connection and subreddit name
        {error}
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
          {heatMapRows}
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
  /* eslint-disable */
  fetchedPosts: array.isRequired,
  isLoaded: bool,
  error: string,
};

export default HeatMap;
