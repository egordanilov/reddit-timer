import React, {ReactElement} from 'react';
import * as S from '../styles/HeatMap.style';
import { weekdays, utcWeekdays } from '../sharedVariables';
import { ListOfPostsByDayHourArray } from '../hooks/useFetchPosts';
import AmountOfPostsByDayHour from './AmountOfPostsByDayHour';

interface WeekdayRowsProps {
    listOfAllPosts: ListOfPostsByDayHourArray;
    clickHandler: (weekday: number, hourOfTheDay: number) => void;
    activeCell: {
        day: number;
        hour: number;
    };
}

function WeekdayRows({ listOfAllPosts, clickHandler, activeCell }:WeekdayRowsProps):ReactElement {
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
