import styled from 'styled-components';

const HeaderStyled = styled.header`
    display: flex;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    background: #f1f1f1;
    padding: 0 80px;

    a {
        text-decoration: none;
        color: #636363;
        margin-left: 26px;
    }

    a:hover {
        color: #ff4500;
    }

    .header__logo a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 0;
    }

`;

export default HeaderStyled;
