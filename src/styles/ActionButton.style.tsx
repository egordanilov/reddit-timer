import styled from 'styled-components';
import theme from './theme';

const ActionButton = styled.button`
    background: #fdb755;
    border-radius: 4px;
    color: #fff;
    font-family: ${theme.font.family.default};

    border: none;
    padding: 10px 16px;
    cursor: pointer;
    font-size: 14px;
    &:hover {
        background: #fea62e;
    }
`;

export default ActionButton;
