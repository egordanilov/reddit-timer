import styled from 'styled-components';
import theme from './theme';

export const HeatMapWrapper = styled.section`
    width: 1114px;
    height: 332px;
    margin-top: 60px;
`;

export const HeatMapHeader = styled.div`
    width: 100%;
    height: 52px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const HeatMapHeaderHourWrapper = styled.div`
    width: 958px;
    height: calc(100% - 2px);
    background: linear-gradient(180deg, #FEFEFE 0%, #E9E9E9 100%);
    border: 1px solid #F3F3F3;
    display: flex;
`;

export const HeatMapHeaderHour = styled.div`
    color: #787878;
    display: flex;
    width: calc(100%/12);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #787878;
`;

export const HeatMapBody = styled.div`
`;

export const HeatMapRow = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
export const HeatMapRowWeekday = styled.div`
    width: 154px;
    height: 100%;
    background: #1E2537;
    color: #ffffff;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeatMapRowNumber = styled.div`
    background: ${theme.heatMapColors[0]};
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #ffffff;
    height: 100%;
    width: calc((100% - 154px)/24);
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
        border: 2px solid #93918F;
        z-index: 10;
        box-sizing: border-box;
    }
`;

export const HeatMapTimeZone = styled.p`
    text-align: center;
    margin-top: 12px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #93918F;
`;

export const TimeZoneBold = styled.span`
  font-weight: 600;
`;
