import React from 'react';
import { string, array, func } from 'prop-types';
import * as S from '../styles/HeatMapWrapper.style';
import { getPostsByDayHour } from '../hooks/useFetchPosts';
import { utcHours } from '../sharedVariables';

function HoursByWeekDayHour(
  {
    weekDay, listOfPosts = [], clickHandler, activeHour,
  },
) {
  const parsedHours = utcHours.map((hourOfTheDay) => {
    const postsByDayHour = getPostsByDayHour(listOfPosts, weekDay, hourOfTheDay);
    const numberOfPosts = postsByDayHour.length;
    return (
      <S.HeatMapRowNumberOfPosts
        key={`${weekDay} ${hourOfTheDay}`}
        onClick={() => { clickHandler(weekDay, hourOfTheDay); }}
        numberOfPosts={numberOfPosts}
        role="button"
        tabindex={-1}
        selected={activeHour === hourOfTheDay}
      >
        {numberOfPosts}
      </S.HeatMapRowNumberOfPosts>
    );
  });

  return (
    <>
      {parsedHours}
    </>
  );
}

HoursByWeekDayHour.propTypes = {
  weekDay: string.isRequired,
  /* eslint-disable-next-line */
  listOfPosts: array.isRequired,
  clickHandler: func.isRequired,
  /* eslint-disable-next-line */
  activeHour: string.isRequired,
};

export default HoursByWeekDayHour;
