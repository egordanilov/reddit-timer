import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as S from '../styles/SubredditFormWrapper.style';
import { Heading, ActionButton } from '../styles/HeroSectionStyled.style';
import defaultSubreddit from '../sharedVariables';

function SubredditForm() {
  const { subreddit = defaultSubreddit } = useParams();
  const [subredditInput, setSubredditInput] = React.useState(subreddit);
  const submitHandler = (e) => {
    e.preventDefault();
    const newPath = `/search/${subredditInput}`;
    window.history.pushState({}, undefined, newPath);
  };

  useEffect(() => {
    setSubredditInput(subreddit);
  }, [subreddit]);

  return (
    <S.SubredditFormWrapper>
      <Heading>Find the best time for a subreddit</Heading>
      <S.InputRowWrapper onSubmit={submitHandler}>
        <S.InputLabel htmlFor="subredditInput">r /</S.InputLabel>
        <S.SubredditInput
          value={subredditInput}
          onChange={(event) => setSubredditInput(event.target.value)}
          id="subredditInput"
        />
        <ActionButton type="submit">
          SEARCH
        </ActionButton>
      </S.InputRowWrapper>
    </S.SubredditFormWrapper>
  );
}

export default SubredditForm;
