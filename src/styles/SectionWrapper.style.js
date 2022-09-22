import styled from 'styled-components';
import theme from './theme';

const SectionWrapper = styled.section`
    text-align: left;
    max-width: 738px;
    margin: 105px auto;
    
    font-family: ${theme.font.family.default};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: ${theme.color.text};
`;

export default SectionWrapper;
