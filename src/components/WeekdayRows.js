import React from 'react';
import {
  arrayOf, func, number, shape,
} from 'prop-types';
import * as S from '../styles/HeatMapWrapper.style';
import { weekdays, utcWeekdays } from '../sharedVariables';
import HoursByWeekDayHour from './HoursByWeekDayHour';

function WeekdayRows({ listOfPosts, clickHandler, activeCell }) {
  const parsedWeekdays = utcWeekdays.map((weekday) => (
    <S.HeatMapRow key={weekday}>
      <S.HeatMapRowWeekday>{weekdays[weekday]}</S.HeatMapRowWeekday>
      <HoursByWeekDayHour
        listOfPosts={listOfPosts}
        weekDay={weekday}
        clickHandler={clickHandler}
        activeHour={activeCell.day === weekday ? activeCell.hour : 25}
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
  activeCell: shape({ day: number, hour: number }).isRequired,
  listOfPosts: arrayOf(arrayOf(number)).isRequired,
  clickHandler: func.isRequired,
};

export default WeekdayRows;
