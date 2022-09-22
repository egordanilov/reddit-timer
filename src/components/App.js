import React from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Terms from '../pages/Terms';
import theme from '../styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/">
          <Route path="search" element={<Search />}>
            <Route path=":subreddit" element={<Search />} />
            <Route index element={<Search />} />
          </Route>
          <Route path="/terms" element={<Terms />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
