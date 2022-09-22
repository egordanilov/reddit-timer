import styled from 'styled-components';

const FooterStyled = styled.footer`
    width: 100%; /* tries to take up the complete space */
    max-width: 940px; /* prevents growing larger than 940px */
    margin: auto; /* centers footer on screens wider than 940px */
    padding: 0 20px; /* ensures some horizontal space on small devices */    
    height: 100px;
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
        color: ${(props) => props.theme.color.text};
    }

    a:hover {
        color: ${(props) => props.theme.color.linkHover};
    }

    a:first-of-type {
        flex: 1;
    }

    a:last-of-type {
        text-align: right;
        flex: 1;
    }
`;

export default FooterStyled;
