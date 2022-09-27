import React from 'react';
import { Link } from 'react-router-dom';
import * as S from '../styles/HeroSectionStyled.style';
import defaultSubreddit from '../sharedVariables';
import headerImg from '../UI/headerImg.png';

function HeroSection() {
  return (
    <S.HeroSectionStyled>
      <S.Heading>No reactions to your reddit posts?</S.Heading>
      <S.HeroSubtitle>
        Great timing, great results! Find the best time to post on your subreddit.
      </S.HeroSubtitle>
      <Link to={`/search/${defaultSubreddit}`}>
        <S.ActionButton>SHOW ME THE BEST TIME</S.ActionButton>
      </Link>
      <Link to={`/search/${defaultSubreddit}`}>
        <S.HeroSubreddit>{`r/${defaultSubreddit}`}</S.HeroSubreddit>
      </Link>
      <Link to={`/search/${defaultSubreddit}`}>
        <S.HeroImage src={headerImg} alt="Best time to post on reddit" />
      </Link>
    </S.HeroSectionStyled>
  );
}

export default HeroSection;
