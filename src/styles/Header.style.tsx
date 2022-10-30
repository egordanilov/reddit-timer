import styled from 'styled-components';
import { LinkProps } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const HeaderWrapper = styled.header`
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

export interface HashLinkProps extends LinkProps {
    elementId?: string | undefined;
    smooth?: boolean | undefined;
    scroll?: ((element: HTMLElement) => void) | undefined;
    timeout?: number | undefined;
}

export const HeaderLink = styled(HashLink)<HashLinkProps>`
    text-decoration: none;
    color: ${(props) => props.theme.color.text};
    margin-left: 26px;
    @media (hover: hover){
        &:hover {
            color: ${(props) => props.theme.color.linkHover};
        }
    }
    @media (max-width: 575px) {
        margin-left: 10px;
        &:nth-of-type(2), &:nth-of-type(3) {
            display: none;
        }
    }
`;
