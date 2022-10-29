import React from 'react';
import * as S from '../styles/HeatMap.style';
import { weekdays, utcWeekdays } from '../sharedVariables';
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

export default WeekdayRows;
