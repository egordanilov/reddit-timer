import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const HeaderLink = styled(HashLink)`
    text-decoration: none;
    color: ${(props) => props.theme.color.text};
    margin-left: 26px;
    &:hover {
        color: ${(props) => props.theme.color.linkHover};
    }
`;

export default HeaderLink;
