import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

export const HeaderStyled = styled.header`
    display: flex;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    background: #f1f1f1;
    padding: 0 80px;
    margin-bottom: 50px;
    @media (min-width: 576px) and (max-width: 767px) {
        padding: 0 30px;
    }
    @media (max-width: 575px) {
        padding: 0 20px;
    }
`;

export const HeaderLink = styled(HashLink)`
    text-decoration: none;
    color: ${(props) => props.theme.color.text};
    margin-left: 26px;
    &:hover {
        color: ${(props) => props.theme.color.linkHover};
    }
    @media (max-width: 575px) {
        margin-left: 10px;
        &:nth-of-type(2), &:nth-of-type(3) {
            display: none;
        }
    }
`;
