import React from 'react';
import {
  array, func, number,
} from 'prop-types';
import * as S from '../styles/HeatMapWrapper.style';
import { utcHours } from '../sharedVariables';

function HoursByWeekDayHour(
  {
    weekDay, listOfPosts, clickHandler, activeHour,
  },
) {
  // eslint-disable-next-line arrow-body-style
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
}

HoursByWeekDayHour.propTypes = {
  weekDay: number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  listOfPosts: array.isRequired,
  clickHandler: func.isRequired,
  activeHour: number,
};

HoursByWeekDayHour.defaultProps = {
  activeHour: 25,
};

export default HoursByWeekDayHour;
