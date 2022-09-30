import React from 'react';
import * as S from '../styles/HeatMapWrapper.style';

function HeatMap() {
  return (
    <S.HeatMapWrapper>
      <S.HeatMapHeader>
        <S.HeatMapHeaderHourWrapper>
          <S.HeatMapHeaderHour>12:00am</S.HeatMapHeaderHour>
          <S.HeatMapHeaderHour>2:00am</S.HeatMapHeaderHour>
          <S.HeatMapHeaderHour>4:00am</S.HeatMapHeaderHour>
          <S.HeatMapHeaderHour>6:00am</S.HeatMapHeaderHour>
          <S.HeatMapHeaderHour>8:00am</S.HeatMapHeaderHour>
          <S.HeatMapHeaderHour>10:00am</S.HeatMapHeaderHour>
          <S.HeatMapHeaderHour>12:00pm</S.HeatMapHeaderHour>
          <S.HeatMapHeaderHour>2:00pm</S.HeatMapHeaderHour>
          <S.HeatMapHeaderHour>4:00pm</S.HeatMapHeaderHour>
          <S.HeatMapHeaderHour>6:00pm</S.HeatMapHeaderHour>
          <S.HeatMapHeaderHour>8:00pm</S.HeatMapHeaderHour>
          <S.HeatMapHeaderHour>10:00pm</S.HeatMapHeaderHour>
        </S.HeatMapHeaderHourWrapper>
      </S.HeatMapHeader>
      <S.HeatMapBody>
        <S.HeatMapRow>
          <S.HeatMapRowWeekday>Sunday</S.HeatMapRowWeekday>
          <S.HeatMapRowNumber>2</S.HeatMapRowNumber>
        </S.HeatMapRow>
        <S.HeatMapRow>
          <S.HeatMapRowWeekday>Monday</S.HeatMapRowWeekday>
        </S.HeatMapRow>
        <S.HeatMapRow>
          <S.HeatMapRowWeekday>Tuesday</S.HeatMapRowWeekday>
        </S.HeatMapRow>
        <S.HeatMapRow>
          <S.HeatMapRowWeekday>Wednesday</S.HeatMapRowWeekday>
        </S.HeatMapRow>
        <S.HeatMapRow>
          <S.HeatMapRowWeekday>Thursday</S.HeatMapRowWeekday>
        </S.HeatMapRow>
        <S.HeatMapRow>
          <S.HeatMapRowWeekday>Friday</S.HeatMapRowWeekday>
        </S.HeatMapRow>
        <S.HeatMapRow>
          <S.HeatMapRowWeekday>Saturday</S.HeatMapRowWeekday>
        </S.HeatMapRow>
      </S.HeatMapBody>
    </S.HeatMapWrapper>
  );
}

export default HeatMap;
