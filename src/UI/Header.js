import React from 'react';
import * as S from '../styles/Header.style';
import Logo from '../styles/Logo.style';
import { ReactComponent as IconMenu } from './RedditTimerLogo.svg';
import theme from '../styles/theme';
import defaultSubreddit from '../sharedVariables';

function Header() {
  return (
    <S.HeaderWrapper>
      <div>
        <Logo to="/" alt="reddit_time_footer_logo" aria-label="go to home page">
          <IconMenu alt="reddit_time_footer_logo" />
        </Logo>
      </div>

      <div>
        <S.HeaderLink to={`/search/${defaultSubreddit}`} theme={theme}>Search</S.HeaderLink>
        <S.HeaderLink smooth to="/#how-it-works" theme={theme}>How it works</S.HeaderLink>
        <S.HeaderLink smooth to="/#about" theme={theme}>About</S.HeaderLink>
      </div>
    </S.HeaderWrapper>
  );
}

export default Header;
