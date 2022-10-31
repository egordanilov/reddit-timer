import React, {ReactElement} from 'react';
import { Link } from 'react-router-dom';
import * as S from '../styles/HeroSection.style';
import ActionButton from '../styles/ActionButton.style';
import defaultSubreddit from '../sharedVariables';
import headerImg from '../UI/headerImg.png';

function HeroSection():ReactElement {
  return (
    <S.HeroSectionWrapper>
      <S.Heading>No reactions to your reddit posts?</S.Heading>
      <S.HeroSubtitle>
        Great timing, great results! Find the best time to post on your subreddit.
      </S.HeroSubtitle>
      <Link to={`/search/${defaultSubreddit}`}>
        <ActionButton>SHOW ME THE BEST TIME</ActionButton>
      </Link>
      <Link to={`/search/${defaultSubreddit}`}>
        <S.HeroSubreddit>{`r/${defaultSubreddit}`}</S.HeroSubreddit>
      </Link>
      <Link to={`/search/${defaultSubreddit}`}>
        <S.HeroImage src={headerImg} alt="Best time to post on reddit" />
      </Link>
    </S.HeroSectionWrapper>
  );
}

export default HeroSection;
