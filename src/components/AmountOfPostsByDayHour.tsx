import React from 'react';
import * as S from '../styles/HeatMap.style';
import { utcHours } from '../sharedVariables';

type AmountOfPostsByDayHourProps = {
  weekDay: number;
  listOfPostsByWeekDay: any;
  clickHandler: any;
  activeHour: number;
}

const AmountOfPostsByDayHour = React.memo(function AmountOfPostsByDayHour(
  {
    weekDay, listOfPostsByWeekDay, clickHandler, activeHour,
  }:AmountOfPostsByDayHourProps,
) {
  function onKeyDown(event) {
    if (event.key === ' ' || event.key === 'Enter') {
      clickHandler();
    }
  }
  const parsedHours = utcHours.map((hourOfTheDay) => (
    <S.HeatMapRowNumberOfPosts
      key={`${weekDay} ${hourOfTheDay}`}
      onClick={() => { clickHandler(weekDay, hourOfTheDay); }}
      onKeyDown={onKeyDown}
      numberOfPosts={listOfPostsByWeekDay[hourOfTheDay].length}
      type="button"
      role="button"
      tabIndex={-1}
      selected={activeHour === hourOfTheDay}
    >
      {listOfPostsByWeekDay[hourOfTheDay].length}
    </S.HeatMapRowNumberOfPosts>
  ));

  return (
    <>
      {parsedHours}
    </>
  );
});

export default AmountOfPostsByDayHour;
