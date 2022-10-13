/* eslint-disable */
import React from 'react';
import { array, func } from 'prop-types';
import * as S from '../styles/HeatMapWrapper.style';
import { weekdays } from '../sharedVariables';
import HoursByWeekDayHour from './HoursByWeekDayHour';

function WeekdayRows({ listOfPosts, clickHandler, activeCell }) {
  const parsedWeekdays = weekdays.map((weekday) => (
    <S.HeatMapRow key={weekday}>
      <S.HeatMapRowWeekday>{weekday}</S.HeatMapRowWeekday>
      <HoursByWeekDayHour
        listOfPosts={listOfPosts}
        weekDay={weekday}
        clickHandler={clickHandler}
        activeHour={activeCell.day === weekday ? activeCell.hour : null}
      />
    </S.HeatMapRow>
  ));
  return (
    <>
      {parsedWeekdays}
    </>
  );
}

WeekdayRows.propTypes = {
  /* eslint-disable-next-line */
  listOfPosts: array.isRequired,
  clickHandler: func.isRequired,
};

export default WeekdayRows;
