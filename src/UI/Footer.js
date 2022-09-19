import React from 'react';
import { Link } from 'react-router-dom';
import FooterStyled from '../styles/FooterStyled.style';
import { ReactComponent as IconMenu } from './footerlogo.svg';

function Footer() {
  return (
    <FooterStyled>
      <div>
        <a href="https://ooloo.io/employers">Profy.dev</a>
      </div>
      <div><Link to="/"><IconMenu /></Link></div>
      <div><Link to="/terms">Terms &amp; Privacy</Link></div>
    </FooterStyled>
  );
}

export default Footer;
