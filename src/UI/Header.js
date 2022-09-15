import React from 'react';
import HeaderStyled from '../styles/HeaderStyled.style';
import HeaderLink from '../styles/HeaderLink.style';
import HeaderLogo from '../styles/HeaderLogo.style';
import { ReactComponent as IconMenu } from './RedditTimerLogo.svg';
import theme from '../styles/theme';

function Header() {
  return (
    <HeaderStyled>
      <div className="header__logo">
        <HeaderLogo to="/"><IconMenu /></HeaderLogo>
      </div>

      <div className="header__links">
        <HeaderLink to="/search?reddit=javascript" theme={theme}>Search</HeaderLink>
        <HeaderLink to="/#how-it-works" theme={theme}>How it works</HeaderLink>
        <HeaderLink to="/#about" theme={theme}>About</HeaderLink>
      </div>
    </HeaderStyled>
  );
}

export default Header;
