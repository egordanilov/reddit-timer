import styled from 'styled-components';
import theme from './theme';

const HeroButton = styled.button`
    background: #fdb755;
    border-radius: 4px;
    color: #fff;
    font-family: ${theme.font.default};
    border: 1px solid #fdb755;
    padding: 14px 15px;
    cursor: pointer;
    margin-top: 45px;

`;

export default HeroButton;
