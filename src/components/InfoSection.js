import React from 'react';
import InfoSectionWrapper from '../styles/InfoSectionWrapper.style';
import Info from './Info';

function InfoSection() {
  return (
    <InfoSectionWrapper>
      <Info id="how-it-works" headline="How it works">First</Info>
      <Info id="about" headline="About">First</Info>
    </InfoSectionWrapper>
  );
}

export default InfoSection;
