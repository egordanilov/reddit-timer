import styled from 'styled-components';
import theme from './theme';

const LoadingSpinner = styled.div`
    border: 6px solid ${theme.color.loadingSpinner}; 
    border-top: 6px solid #ffffff;
    border-radius: 50%;
    width: 71px;
    height: 71px;
    animation: spin 1.5s linear infinite;
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    margin: 0 auto;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
`;

export default LoadingSpinner;
