import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

export const HeaderStyled = styled.header`
    display: flex;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    background: #f1f1f1;
    padding: 0 80px;
`;

export const HeaderLink = styled(HashLink)`
    text-decoration: none;
    color: ${(props) => props.theme.color.text};
    margin-left: 26px;
    &:hover {
        color: ${(props) => props.theme.color.linkHover};
    }
`;
