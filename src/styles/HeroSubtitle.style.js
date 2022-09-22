import styled from 'styled-components';
import theme from './theme';

const HeroSubtitle = styled.p`
    font-family: ${theme.font.family.default};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: ${theme.color.text};
    margin-top: 20px;
`;

export default HeroSubtitle;
