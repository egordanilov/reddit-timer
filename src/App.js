import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import GlobalStyles from './styles/GlobalStyles';

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
