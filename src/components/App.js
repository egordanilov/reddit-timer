import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

export default App;
