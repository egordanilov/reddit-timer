import styled from 'styled-components';

export const SubredditFormWrapper = styled.section`
`;

export const InputRowWrapper = styled.form`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 30px;
   height: 36px;
   margin-bottom: 56px;
`;

export const SubredditInput = styled.input`
    width: 370px;
    border-radius: 2px;
    border: 1px solid #e6e6e6;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 14px;
    padding-left: 16px;
    line-height: 17px;
    height: 32px;

    @media (min-width: 576px) and (max-width: 767px) {
        width: 300px;
    }

    @media (min-width: 401px) and (max-width: 575px) {
        width: 190px;
    }

    @media (max-width: 400px) {
        width: 100px;
    }
`;

export const InputLabel = styled.label`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 9px;
    text-align: center;
    color: #9E9E9E;
`;
