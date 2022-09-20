import React from 'react';
import { Link } from 'react-router-dom';
import FooterStyled from '../styles/FooterStyled.style';
import { ReactComponent as IconMenu } from './footerlogo.svg';
import Logo from '../styles/Logo.style';
import theme from '../styles/theme';

function Footer() {
  return (
    <FooterStyled theme={theme}>
      <a href="https://ooloo.io/employers">profy.dev</a>
      <Logo to="/"><IconMenu /></Logo>
      <Link to="/terms">Terms &amp; Privacy</Link>
    </FooterStyled>
  );
}

export default Footer;
