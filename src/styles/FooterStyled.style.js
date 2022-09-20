import styled from 'styled-components';

const FooterStyled = styled.footer`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 0;
    bottom: 0;

    a {
        text-decoration: none;
        color: ${(props) => props.theme.color.text};
    }

    a:hover {
        color: ${(props) => props.theme.color.linkHover};
    }

    a:first-of-type {
        padding-left: 40px;
    }

    a:last-of-type {
        padding-right: 40px;
    }
`;

export default FooterStyled;
