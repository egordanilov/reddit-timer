import React from 'react';
import { string } from 'prop-types';
import * as S from '../styles/SubredditFormWrapper.style';
import { Heading, ActionButton } from '../styles/HeroSectionStyled.style';

function SubredditForm({ subreddit }) {
  return (
    <S.SubredditFormWrapper>
      <Heading>Find the best time for a subreddit</Heading>
      <S.InputRowWrapper>
        <S.InputLabel>r /</S.InputLabel>
        <S.SubredditInput value={subreddit} />
        <ActionButton>
          SEARCH
        </ActionButton>
      </S.InputRowWrapper>
    </S.SubredditFormWrapper>
  );
}

SubredditForm.propTypes = {
  subreddit: string.isRequired,
};

export default SubredditForm;
