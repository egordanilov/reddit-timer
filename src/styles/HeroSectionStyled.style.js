import styled from 'styled-components';
import theme from './theme';

export const HeroSectionWrapper = styled.section`
    text-align: center;
`;

export const HeroSubreddit = styled.p`
    color: ${theme.color.text};
    font-family: ${theme.font.family.default};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    margin-top: 46px;
    text-decoration: none;
`;

export const HeroSubtitle = styled.p`
    font-family: ${theme.font.family.default};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: ${theme.color.text};
    margin-top: 20px;
    margin-bottom: 35px;
    @media (max-width: 768px) {
        margin-bottom: 30px;
    }
`;

export const ActionButton = styled.button`
background: #fdb755;
border-radius: 4px;
color: #fff;
font-family: ${theme.font.default};

border: none;
padding: 10px 16px;
cursor: pointer;
font-size: 14px;
&:hover {
    background: #fea62e;
}

`;

export const Heading = styled.h1`
    font-family: ${theme.font.family.headline};
    color: #000000;
    font-weight: 400;
    line-height: 46px;
    font-size: 38px;
    text-align: center;
    display: block;

    @media (min-width: 576px) and (max-width: 670px) {
        font-size: 32px;
    }

    @media (min-width: 500px) and (max-width: 575px) {
        font-size: 28px;
    }

    @media (max-width: 499px) {
        font-size: 24px;
    }

`;

export const HeroImage = styled.img`
    max-width: 100%;
    width: 90vw;
    margin-top: 36px;

    @media (min-width: 1200px) {
        width: 80vw;
    }

    @media (max-width: 991px) {
        width: 94vw;
    }
`;
