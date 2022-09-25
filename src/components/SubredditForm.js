import React from 'react';
import * as S from '../styles/SubredditFormWrapper.style';
import { Heading, ActionButton } from '../styles/HeroSectionStyled.style';

function SubredditForm() {
  return (
    <S.SubredditFormWrapper>
      <Heading>Find the best time for a subreddit</Heading>
      <S.InputRowWrapper>
        <S.InputLabel>r /</S.InputLabel>
        <S.SubredditInput />
        <ActionButton>
          SEARCH
        </ActionButton>
      </S.InputRowWrapper>
    </S.SubredditFormWrapper>
  );
}

export default SubredditForm;
