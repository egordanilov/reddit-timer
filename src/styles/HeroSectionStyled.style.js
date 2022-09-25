import styled from 'styled-components';
import theme from './theme';

export const HeroSectionStyled = styled.section`
    text-align: center;
    padding-top: 50px;
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
    line-height: 20px;
    text-align: center;
    color: ${theme.color.text};
    margin-top: 20px;
`;

export const HeroButton = styled.button`
background: #fdb755;
border-radius: 4px;
color: #fff;
font-family: ${theme.font.default};
border: 1px solid #fdb755;
padding: 14px 15px;
cursor: pointer;
margin-top: 45px;
`;

export const HeroHeading = styled.h1`
font-family: ${theme.font.family.headline};
color: #000000;
font-weight: 400;
line-height: 46px;
font-size: 38px;
text-align: center;
`;

export const HeroImage = styled.img`
    max-width: 100%;
    margin-top: 36px;
`;
