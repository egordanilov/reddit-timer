import styled from 'styled-components';
import theme from './theme';

export const InfoSectionWrapper = styled.section`
    text-align: left;
    max-width: 738px;
    margin: 105px auto;
    font-family: ${theme.font.family.default};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: ${theme.color.text};

    @media (max-width: 767px) {
        margin: 70px auto;
    }
`;
export const InfoSectionHeader = styled.h2`
    font-family: ${theme.font.family.headline};
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 12px;
`;

export const InfoStyled = styled.article`
    margin-bottom: 105px;
    @media (max-width: 767px) {
        margin-bottom: 50px;
    }
`;

export const InfoLink = styled.a`
    color: ${theme.color.link};
    text-decoration: none;
    &:hover {
        cursor: pointer;
        color: ${theme.color.linkHover};
    }
`;
