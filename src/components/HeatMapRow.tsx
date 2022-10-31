import React, {ReactElement} from 'react';
import * as S from '../styles/HeatMap.style';
import { utcHours } from '../sharedVariables';
import { ArrayOfPostsByWeekDay } from '../hooks/useFetchPosts';

type AmountOfPostsByDayHourProps = {
  weekDay: number;
  listOfPostsByWeekDay: ArrayOfPostsByWeekDay;
  clickHandler: (weekday: number, hourOfTheDay: number) => void;
  activeHour: number;
}


/* Memoizing HeatMapRow, so clicking on <S.AmountOfPostsByDayHour> within a different row, doesn't trigger rerender of unrelated HeatMapRow  */ 
const HeatMapRow = React.memo(function HeatMapRow(
    {
      weekDay,
      listOfPostsByWeekDay,
      clickHandler,
      activeHour
    }:AmountOfPostsByDayHourProps
  ):ReactElement 

  {
    function onKeyDown(event: React.KeyboardEvent, weekDay: number, hourOfTheDay: number) {
      if (event.key === ' ' || event.key === 'Enter') {
        clickHandler(weekDay, hourOfTheDay);
      }
    }

    const parsedHours = utcHours.map((hourOfTheDay) => (
      <S.AmountOfPostsByDayHour
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
      </S.AmountOfPostsByDayHour>
    ));

    return (
      <>
        {parsedHours}
      </>
    );
  }
);

export default HeatMapRow;
