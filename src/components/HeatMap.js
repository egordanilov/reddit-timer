/* eslint-disable */
import React, { useState, useMemo } from 'react';
import { bool, string, array, number } from 'prop-types';
import * as S from '../styles/HeatMapWrapper.style';
import LoadingSpinner from '../styles/LoadingSpinner.style';
import { getPostsByDayHour, sortPostList } from '../hooks/useFetchPosts';
import { weekdays, hours, utcHours } from '../sharedVariables';

function HoursByWeekDayHour({weekDay, listOfPosts, clickHandler}) {
  const parsedHours = utcHours.map((hourOfTheDay) => {
    const postsByDayHour = getPostsByDayHour(listOfPosts, weekDay, hourOfTheDay);
    const numberOfPosts = postsByDayHour.length;
    return (
      <S.HeatMapRowNumberOfPosts key={`${weekDay} ${hourOfTheDay}`} onClick={() => {clickHandler(weekDay, hourOfTheDay)}} numberOfPosts={numberOfPosts} >
        {numberOfPosts}
      </S.HeatMapRowNumberOfPosts>
    );
  });

  return (
    <>
      {parsedHours}
    </>
  );
}

function WeekdayRows({ listOfPosts, clickHandler }) {
  const parsedWeekdays = weekdays.map((weekday) => (
    <S.HeatMapRow key={weekday}>
      <S.HeatMapRowWeekday>{weekday}</S.HeatMapRowWeekday>
      <HoursByWeekDayHour listOfPosts={listOfPosts} weekDay={weekday} clickHandler={clickHandler} />
    </S.HeatMapRow>
  ));

  return (
    <>
      {parsedWeekdays}
    </>
  );
}

function HeatMap({ fetchedPosts, isLoaded, error }) {
  const transformedPosts = useMemo(() => sortPostList(fetchedPosts), [fetchedPosts]);
  const [activeCell, setActiveCell] = useState({
    day: '',
    hour: '',
  });
  function dayHourClickHandler(weekDay, hour) {
    setActiveCell({ day: weekDay, hour });
    console.log(getPostsByDayHour(transformedPosts, weekDay, hour));
  };
  const headerHours = hours.map((hour) => (
    <S.HeatMapHeaderHour key={hour}>{hour}</S.HeatMapHeaderHour>
  ));

  /* Handle loading and errors here, return loading spinner or error message */
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
          <WeekdayRows listOfPosts={transformedPosts} clickHandler={dayHourClickHandler} />
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
