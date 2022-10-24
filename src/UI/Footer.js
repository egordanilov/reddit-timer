import React from 'react';
import {
  FooterStyled, FooterLink, FooterLogoLink, FooterTermsLink,
} from '../styles/FooterStyled.style';
import { ReactComponent as IconMenu } from './footerlogo.svg';
import theme from '../styles/theme';

function Footer() {
  return (
    <FooterStyled theme={theme}>
      <FooterLink href="https://profy.dev/employers">profy.dev</FooterLink>
      <FooterLogoLink to="/" aria-label="click to go to home page">
        <IconMenu alt="reddit_time_footer_logo" />
      </FooterLogoLink>
      <FooterTermsLink to="/terms">Terms &amp; Privacy</FooterTermsLink>
    </FooterStyled>
  );
}

export default Footer;
