import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Search from '../pages/Search';
import GlobalStyles from '../styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <header>Header</header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <footer>Footer</footer>
    </>
  );
}

export default App;
