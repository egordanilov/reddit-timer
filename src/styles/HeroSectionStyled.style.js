import styled from 'styled-components';
import theme from './theme';

const HeroSection = styled.section`
    text-align: center;
    padding-top: 50px;

    h1 {
        font-family: ${theme.font.family.headline};
        color: #000000;
        font-weight: 400;
        line-height: 46px;
        font-size: 38px;
        text-align: center;
    }

    p.subtitle {
        font-family: ${theme.font.family.default};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: ${theme.color.text};
        margin-top: 20px;
    }

    p.subreddit {
        color: ${theme.color.text};
        font-family: ${theme.font.family.default};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        margin-top: 46px;
    }

    img {
        margin-top: 36px;
    }
`;

export default HeroSection;
