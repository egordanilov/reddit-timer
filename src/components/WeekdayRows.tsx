import React from 'react';
import {
  func, number, shape,
} from 'prop-types';
import * as S from '../styles/HeatMap.style';
import { weekdays, utcWeekdays, postListShape } from '../sharedVariables';
import AmountOfPostsByDayHour from './AmountOfPostsByDayHour';

function WeekdayRows({ listOfAllPosts, clickHandler, activeCell }) {
  const parsedWeekdays = utcWeekdays.map((weekday) => (
    <S.HeatMapRow key={weekday}>
      <S.HeatMapRowWeekday>{weekdays[weekday]}</S.HeatMapRowWeekday>
      <AmountOfPostsByDayHour
        listOfPostsByWeekDay={listOfAllPosts[weekday]}
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
  listOfAllPosts: postListShape.isRequired,
  clickHandler: func.isRequired,
};

export default WeekdayRows;
