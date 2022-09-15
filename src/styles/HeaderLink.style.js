import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderLink = styled(Link)`
    text-decoration: none;
    color: ${(props) => props.theme.color.text};
    margin-left: 26px;

    &:hover {
        color: ${(props) => props.theme.color.linkHover};
    }
`;

export default HeaderLink;
