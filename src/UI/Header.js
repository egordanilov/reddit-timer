import React from 'react';
import { Link } from 'react-router-dom';
import HeaderStyled from '../styles/HeaderStyled.styled';

function Header() {
  return (
    <HeaderStyled>
      <div className="header__logo">
        <Link to="/">SVG Logo Home page</Link>
      </div>

      <div className="header__links">
        <Link to="/search">Search</Link>
        <Link to="/#how-it-works">How It Works</Link>
        <Link to="/#about">About</Link>
      </div>
    </HeaderStyled>
  );
}

export default Header;
