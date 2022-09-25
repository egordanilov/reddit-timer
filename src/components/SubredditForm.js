import React from 'react';
import { string, func } from 'prop-types';
import * as S from '../styles/SubredditFormWrapper.style';
import { Heading, ActionButton } from '../styles/HeroSectionStyled.style';

function SubredditForm({ subreddit, changeHandler }) {
  const submitHandler = (e) => {
    e.preventDefault();
    const newPath = `/search/${subreddit}`;
    window.history.pushState({}, undefined, newPath);
  };

  return (
    <S.SubredditFormWrapper>
      <Heading>Find the best time for a subreddit</Heading>
      <S.InputRowWrapper onSubmit={submitHandler}>
        <S.InputLabel htmlFor="subredditInput">r /</S.InputLabel>
        <S.SubredditInput
          value={subreddit}
          onChange={(event) => changeHandler(event.target.value)}
          id="subredditInput"
        />
        <ActionButton type="submit">
          SEARCH
        </ActionButton>
      </S.InputRowWrapper>
    </S.SubredditFormWrapper>
  );
}

SubredditForm.propTypes = {
  subreddit: string.isRequired,
  changeHandler: func.isRequired,
};

export default SubredditForm;
