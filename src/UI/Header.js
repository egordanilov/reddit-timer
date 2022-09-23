import React from 'react';
import HeaderStyled from '../styles/HeaderStyled.style';
import HeaderLink from '../styles/HeaderLink.style';
import Logo from '../styles/Logo.style';
import { ReactComponent as IconMenu } from './RedditTimerLogo.svg';
import theme from '../styles/theme';
import defaultSubreddit from '../sharedVariables';

function Header() {
  return (
    <HeaderStyled>
      <div className="header__logo">
        <Logo to="/"><IconMenu /></Logo>
      </div>

      <div className="header__links">
        <HeaderLink to={`/search/${defaultSubreddit}`} theme={theme}>Search</HeaderLink>
        <HeaderLink smooth to="/#how-it-works" theme={theme}>How it works</HeaderLink>
        <HeaderLink smooth to="/#about" theme={theme}>About</HeaderLink>
      </div>
    </HeaderStyled>
  );
}

export default Header;
