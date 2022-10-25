import React from 'react';
import {
  arrayOf, func, number,
} from 'prop-types';
import * as S from '../styles/HeatMap.style';
import { utcHours } from '../sharedVariables';

// eslint-disable-next-line prefer-arrow-callback
const AmountOfPostsByDayHour = React.memo(function AmountOfPostsByDayHour(
  {
    weekDay, listOfPosts, clickHandler, activeHour,
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
      numberOfPosts={listOfPosts[weekDay][hourOfTheDay]}
      type="button"
      role="button"
      tabindex={-1}
      selected={activeHour === hourOfTheDay}
    >
      {listOfPosts[weekDay][hourOfTheDay]}
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
  listOfPosts: arrayOf(arrayOf(number)).isRequired,
  clickHandler: func.isRequired,
  activeHour: number,
};

AmountOfPostsByDayHour.defaultProps = {
  activeHour: 25,
};

export default AmountOfPostsByDayHour;
