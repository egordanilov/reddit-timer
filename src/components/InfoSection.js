import React from 'react';
import * as S from '../styles/InfoSection.style';
import InfoChild from './InfoChild';

function InfoSection() {
  return (
    <S.InfoSectionWrapper>
      <InfoChild id="how-it-works" headline="How it works">
        • We find the 500 top posts from the past year for a subreddit.
        <br />
        • The data is visualized in a heatmap grouped by weekday and hour of the day.
        <br />
        • See immediately when to submit your reddit post.
      </InfoChild>
      {/* eslint-disable */}
      <InfoChild id="about" headline="About">
        This app was created during a course on 
        <S.InfoLink href="https://profy.dev" target="_blank" rel="noopener noreferrer"> profy.dev </S.InfoLink> with the goal to implement a pixel-perfect real-world application with professional workflows and tools like Kanban, ClickUp, Figma, GitHub, pull requests and code reviews. 
        <br /><S.InfoLink href="https://profy.dev/employers" target="_blank" rel="noopener noreferrer"> Click here for more information.</S.InfoLink>
      </InfoChild>
      {/* eslint-enable */}
    </S.InfoSectionWrapper>
  );
}

export default InfoSection;
