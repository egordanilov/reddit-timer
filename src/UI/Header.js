import React from 'react';
import * as S from '../styles/HeaderStyled.style';
import Logo from '../styles/Logo.style';
import { ReactComponent as IconMenu } from './RedditTimerLogo.svg';
import theme from '../styles/theme';
import defaultSubreddit from '../sharedVariables';

function Header() {
  return (
    <S.HeaderStyled>
      <div className="header__logo">
        <Logo to="/" aria-label="go to the home page"><IconMenu alt="Reddit Timer logo" /></Logo>
      </div>

      <div className="header__links">
        <S.HeaderLink to={`/search/${defaultSubreddit}`} theme={theme}>Search</S.HeaderLink>
        <S.HeaderLink smooth to="/#how-it-works" theme={theme}>How it works</S.HeaderLink>
        <S.HeaderLink smooth to="/#about" theme={theme}>About</S.HeaderLink>
      </div>
    </S.HeaderStyled>
  );
}

export default Header;
