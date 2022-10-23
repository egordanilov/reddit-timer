import React from 'react';
import { Link } from 'react-router-dom';
import { FooterStyled, FooterLink } from '../styles/FooterStyled.style';
import { ReactComponent as IconMenu } from './footerlogo.svg';
import Logo from '../styles/Logo.style';
import theme from '../styles/theme';

function Footer() {
  return (
    <FooterStyled theme={theme}>
      <FooterLink href="https://profy.dev/employers">profy.dev</FooterLink>
      <Logo to="/" alt=""><IconMenu /></Logo>
      <Link to="/terms">Terms &amp; Privacy</Link>
    </FooterStyled>
  );
}

export default Footer;
