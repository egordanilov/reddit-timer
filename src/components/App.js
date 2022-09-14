import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Header from '../UI/Header';
import theme from '../styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </ThemeProvider>
  );
}

export default App;
