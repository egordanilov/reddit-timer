import React from 'react';
import { Link } from 'react-router-dom';
import HeroSectionStyled from '../styles/HeroSectionStyled.style';
import HeroButton from '../styles/HeroButton.style';
import headerImg from '../UI/headerImg.png';

function HeroSection() {
  return (
    <HeroSectionStyled>
      <h1 className="title">No reactions to your reddit posts?</h1>
      <p className="subtitle">Great timing, great results! Find the best time to post on your subreddit.</p>
      <Link to="/search/javascript">
        <HeroButton>SHOW ME THE BEST TIME</HeroButton>
      </Link>
      <p className="subreddit">r/javascript</p>
      <Link to="/search/javascript">
        <img src={headerImg} alt="Best time to post on reddit" />
      </Link>
    </HeroSectionStyled>
  );
}

export default HeroSection;
