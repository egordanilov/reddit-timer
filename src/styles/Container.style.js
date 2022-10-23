import styled from 'styled-components';

const Container = styled.main`
    min-height: calc(100vh - 200px);
    max-width: 1200px
    margin: 0 auto;

    @media (min-width: 768px) and (max-width: 992px) {
        padding: 0 30px;
    }

    @media (min-width: 576px) and (max-width: 767px) {
        padding: 0 20px;
    }

    @media (max-width: 575px) {
        padding: 0 20px;
    }
`;
export default Container;
