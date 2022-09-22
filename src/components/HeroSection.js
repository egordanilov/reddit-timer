import React from 'react';
import { Link } from 'react-router-dom';
import HeroSectionStyled from '../styles/HeroSectionStyled.style';
import HeroButton from '../styles/HeroButton.style';
import HeroHeading from '../styles/HeroHeading.style';
import HeroSubtitle from '../styles/HeroSubtitle.style';
import HeroSubreddit from '../styles/HeroSubreddit.style';

import headerImg from '../UI/headerImg.png';

function HeroSection() {
  return (
    <HeroSectionStyled>
      <HeroHeading>No reactions to your reddit posts?</HeroHeading>
      <HeroSubtitle>
        Great timing, great results! Find the best time to post on your subreddit.
      </HeroSubtitle>
      <Link to="/search/javascript">
        <HeroButton>SHOW ME THE BEST TIME</HeroButton>
      </Link>
      <HeroSubreddit>r/javascript</HeroSubreddit>
      <Link to="/search/javascript">
        <img src={headerImg} alt="Best time to post on reddit" />
      </Link>
    </HeroSectionStyled>
  );
}

export default HeroSection;
