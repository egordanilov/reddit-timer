import React, {ReactElement} from 'react';
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
):ReactElement {
  function onKeyDown(event: React.KeyboardEvent, weekDay: number, hourOfTheDay: number) {
    if (event.key === ' ' || event.key === 'Enter') {
      clickHandler(weekDay, hourOfTheDay);
    }
  }

  const parsedHours = utcHours.map((hourOfTheDay) => (
    <S.HeatMapRowNumberOfPosts
      key={`${weekDay} ${hourOfTheDay}`}
      onClick={() => { clickHandler(weekDay, hourOfTheDay); }}
      onKeyDown={(event) => { onKeyDown(event, weekDay, hourOfTheDay)}}
      numberOfPosts={listOfPostsByWeekDay[hourOfTheDay].length}
      type="button"
      role="button"
      tabindex={-1}
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
