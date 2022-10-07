import React, { useState } from 'react';
import { object } from 'prop-types';
import * as S from '../styles/HeatMapWrapper.style';
import LoadingSpinner from '../styles/LoadingSpinner.style';
import { getPostsByDayHour } from '../hooks/useFetchPosts';
import { weekdays, hours, utcHours } from '../sharedVariables';

function HeatMap({ fetchPosts }) {
  const [selectedDayHour, setSelectedDayHour] = useState('');
  function dayHourClickHandler(weekDay, hour) {
    setSelectedDayHour(`${weekDay} ${hour}`);
    console.log(getPostsByDayHour(fetchPosts.posts, weekDay, hour));
  }
  const headerHours = hours.map((hour) => (
    <S.HeatMapHeaderHour key={hour}>{hour}</S.HeatMapHeaderHour>
  ));

  const heatMapRows = weekdays.map((weekDay) => {
    const postsByHour = utcHours.map((hour) => (
      <S.HeatMapRowNumber
        key={`${weekDay} ${hour}`}
        numberOfPosts={getPostsByDayHour(fetchPosts.posts, weekDay, hour).length}
        selected={`${weekDay} ${hour}` === selectedDayHour}
        onClick={() => { dayHourClickHandler(weekDay, hour); }}
      >
        {getPostsByDayHour(fetchPosts.posts, weekDay, hour).length}
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
  if (fetchPosts.error) {
    return (
      <>
        Failed to fetch, check internet connection and subreddit name
        {fetchPosts.error}
      </>
    );
  }
  /* loading spinner while posts still being fetched */
  if (!fetchPosts.isLoaded) {
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
  // eslint-disable-next-line react/forbid-prop-types
  fetchPosts: object.isRequired,
};

export default HeatMap;
