import React from 'react';
import {
  arrayOf,
  func, number,
} from 'prop-types';
import * as S from '../styles/HeatMap.style';
import { postShape, utcHours } from '../sharedVariables';

// eslint-disable-next-line prefer-arrow-callback
const AmountOfPostsByDayHour = React.memo(function AmountOfPostsByDayHour(
  {
    weekDay, listOfPostsByWeekDay, clickHandler, activeHour,
  },
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

AmountOfPostsByDayHour.propTypes = {
  weekDay: number.isRequired,
  listOfPostsByWeekDay: arrayOf(arrayOf(postShape)).isRequired,
  clickHandler: func.isRequired,
  activeHour: number,
};

AmountOfPostsByDayHour.defaultProps = {
  activeHour: 25,
};

export default AmountOfPostsByDayHour;
