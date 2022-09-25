import React from 'react';
import InfoSectionWrapper from '../styles/InfoSectionWrapper.style';
import Info from './Info';
import InfoLink from '../styles/InfoLink.style';

function InfoSection() {
  return (
    <InfoSectionWrapper>
      <Info id="how-it-works" headline="How it works">
        • We find the 500 top posts from the past year for a subreddit.
        <br />
        • The data is visualized in a heatmap grouped by weekday and hour of the day.
        <br />
        • See immediately when to submit your reddit post.
      </Info>
      {/* eslint-disable */}
      <Info id="about" headline="About">
        This app was created during a course on 
        <InfoLink href="https://profy.dev" target="_blank" rel="noopener noreferrer"> profy.dev </InfoLink> with the goal to implement a pixel-perfect real-world application with professional workflows and tools like Kanban, ClickUp, Figma, GitHub, pull requests and code reviews. 
        <InfoLink href="https://profy.dev/employers" target="_blank" rel="noopener noreferrer"> Click here for more information.</InfoLink>
      </Info>
      {/* eslint-enable */}
    </InfoSectionWrapper>
  );
}

export default InfoSection;
