import React from 'react';
import * as S from '../styles/HeatMapWrapper.style';

function HeatMap() {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const hours = ['12:00am', '2:00am', '4:00am', '6:00am', '8:00am', '10:00am', '12:00pm', '2:00pm', '4:00pm', '6:00pm', '8:00pm', '10:00pm'];
  /* eslint-disable */
  const hoursComp = hours.map((hour) => <S.HeatMapHeaderHour key={hour}>{hour}</S.HeatMapHeaderHour>);
  
  const weekdaysComp = weekdays.map((weekday) => {
    return (
        <S.HeatMapRow>
            <S.HeatMapRowWeekday>{weekday}</S.HeatMapRowWeekday>
            <S.HeatMapRowNumber>5</S.HeatMapRowNumber>
            <S.HeatMapRowNumber>5</S.HeatMapRowNumber>
            <S.HeatMapRowNumber>5</S.HeatMapRowNumber>
            <S.HeatMapRowNumber>5</S.HeatMapRowNumber>
            <S.HeatMapRowNumber>5</S.HeatMapRowNumber>
            <S.HeatMapRowNumber>5</S.HeatMapRowNumber>
            <S.HeatMapRowNumber>5</S.HeatMapRowNumber>
            <S.HeatMapRowNumber>5</S.HeatMapRowNumber>
            <S.HeatMapRowNumber>5</S.HeatMapRowNumber>
            <S.HeatMapRowNumber>5</S.HeatMapRowNumber>
            <S.HeatMapRowNumber>5</S.HeatMapRowNumber>
            <S.HeatMapRowNumber>5</S.HeatMapRowNumber>
            <S.HeatMapRowNumber>5</S.HeatMapRowNumber>
            <S.HeatMapRowNumber>5</S.HeatMapRowNumber>
            <S.HeatMapRowNumber>5</S.HeatMapRowNumber>
            <S.HeatMapRowNumber>5</S.HeatMapRowNumber>
            <S.HeatMapRowNumber>5</S.HeatMapRowNumber>
            <S.HeatMapRowNumber>5</S.HeatMapRowNumber>
            <S.HeatMapRowNumber>5</S.HeatMapRowNumber>
            <S.HeatMapRowNumber>5</S.HeatMapRowNumber>
            <S.HeatMapRowNumber>5</S.HeatMapRowNumber>
            <S.HeatMapRowNumber>5</S.HeatMapRowNumber>
            <S.HeatMapRowNumber>5</S.HeatMapRowNumber>
            <S.HeatMapRowNumber>5</S.HeatMapRowNumber>
        </S.HeatMapRow>
    );
  });
  /* eslint-enable */
  return (
    <S.HeatMapWrapper>
      <S.HeatMapHeader>
        <S.HeatMapHeaderHourWrapper>
          {hoursComp}
        </S.HeatMapHeaderHourWrapper>
      </S.HeatMapHeader>
      <S.HeatMapBody>
        {weekdaysComp}
      </S.HeatMapBody>
      <S.HeatMapTimeZone>
        All times are shown in your timezone:
        <S.TimeZoneBold>
          {` ${Intl.DateTimeFormat().resolvedOptions().timeZone}`}
        </S.TimeZoneBold>
      </S.HeatMapTimeZone>
    </S.HeatMapWrapper>
  );
}

export default HeatMap;
