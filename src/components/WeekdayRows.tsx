import React from 'react';
import * as S from '../styles/HeatMap.style';
import { weekdays, utcWeekdays } from '../sharedVariables';
import AmountOfPostsByDayHour from './AmountOfPostsByDayHour';

type Post = {
    title: string;
    created_utc: number;
    date: Date;
    postDay: number;
    postHour: number;
    upvotes: number;
    author: string;
    num_comments: number;
    permalink: string;
    author_is_blocked: boolean;
};

type TopLevel = Post[];
type Days = TopLevel[];

type FetchedPosts = Days[];

interface WeekdayRowsProps {
    listOfAllPosts: FetchedPosts;
    clickHandler: (weekDay: number, hour: number) => void;
    activeCell: {
        day: number;
        hour: number;
    };
}

function WeekdayRows({ listOfAllPosts, clickHandler, activeCell }:WeekdayRowsProps) {
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
