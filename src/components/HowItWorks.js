import React from 'react';
import SectionWrapper from '../styles/SectionWrapper.style';
import SectionWrapperHeader from '../styles/SectionWrapperHeader.style';
import SectionWrapperListItem from '../styles/SectionWrapperListItem';

function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <SectionWrapperHeader>How it works</SectionWrapperHeader>
      <SectionWrapperListItem>
        • We find the 500 top posts from the past year for a subreddit.
      </SectionWrapperListItem>
      <SectionWrapperListItem>
        • The data is visualized in a heatmap grouped by weekday and hour of the day.
      </SectionWrapperListItem>
      <SectionWrapperListItem>
        • See immediately when to submit your reddit post.
      </SectionWrapperListItem>
    </SectionWrapper>
  );
}

export default HowItWorks;
