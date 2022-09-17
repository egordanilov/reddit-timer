import React from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Header from '../UI/Header';
import Home from '../pages/Home';
import Search from '../pages/Search';
import theme from '../styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/">
          <Route path="search" element={<Search />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Outlet />
      <footer>Footer</footer>
    </ThemeProvider>
  );
}

export default App;
