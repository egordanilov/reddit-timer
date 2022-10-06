import React from 'react';
import * as S from '../styles/HeatMapWrapper.style';
import LoadingSpinner from '../styles/LoadingSpinner.style';
import useGetPostsByDayHour from '../hooks/useGetPostsByDayHour';
/* eslint-disable */
function HeatMap({ fetchPosts }) {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const hours = ['12:00am', '2:00am', '4:00am', '6:00am', '8:00am', '10:00am', '12:00pm', '2:00pm', '4:00pm', '6:00pm', '8:00pm', '10:00pm'];
  const utcHours = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  const headerHours = hours.map((hour) => {
    return (
      <S.HeatMapHeaderHour key={hour}>{hour}</S.HeatMapHeaderHour>
    );
  });
  const heatMapRows = weekdays.map((weekDay) => {
    const postsByHour = utcHours.map((hour) => {
      return (
        <S.HeatMapRowNumber key={`${weekDay} ${hour}`} numberOfPosts={useGetPostsByDayHour(fetchPosts.posts, weekDay, hour).length} selected={false}>{useGetPostsByDayHour(fetchPosts.posts, weekDay, hour).length}</S.HeatMapRowNumber>
      );
    });
    return(
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

export default HeatMap;
