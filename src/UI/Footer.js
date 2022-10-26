import React from 'react';
import * as S from '../styles/Footer.style';
import { ReactComponent as IconMenu } from './footerlogo.svg';
import theme from '../styles/theme';

function Footer() {
  return (
    <S.FooterWrapper theme={theme}>
      <S.FooterLink href="https://profy.dev/employers" target="_blank" rel="noopener noreferrer">profy.dev</S.FooterLink>
      <S.FooterLogoLink to="/" aria-label="click to go to home page">
        <IconMenu alt="reddit_time_footer_logo" />
      </S.FooterLogoLink>
      <S.FooterLink href="https://github.com/egordanilov/reddit-timer" target="_blank" rel="noopener noreferrer">Github</S.FooterLink>
    </S.FooterWrapper>
  );
}

export default Footer;
