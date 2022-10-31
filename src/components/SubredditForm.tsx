import React, { useEffect, ReactElement } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from '../styles/SubredditForm.style';
import { Heading } from '../styles/HeroSection.style';
import ActionButton from '../styles/ActionButton.style';
import defaultSubreddit from '../sharedVariables';

function SubredditForm():ReactElement {
  const { subreddit = defaultSubreddit } = useParams();
  const [subredditInput, setSubredditInput] = React.useState(subreddit);
  const navigate = useNavigate();
  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSubredditInput(e.target.value);
  };
  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newPath = `/search/${subredditInput}`;
    navigate(newPath);
  };

  useEffect(() => {
    setSubredditInput(subreddit);
  }, [subreddit]);

  return (
    <S.SubredditFormWrapper>
      <Heading>Find the best time for a subreddit</Heading>
      <S.InputRowWrapper onSubmit={submitHandler}>
        <S.InputGroup>
          <S.InputLabel htmlFor="subredditInput">r /</S.InputLabel>
          <S.SubredditInput
            value={subredditInput}
            onChange={changeHandler}
            id="subredditInput"
            name="subredditInput"
          />
        </S.InputGroup>
        <ActionButton type="submit">
          SEARCH
        </ActionButton>
      </S.InputRowWrapper>
    </S.SubredditFormWrapper>
  );
}

export default SubredditForm;
