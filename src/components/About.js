import React from 'react';
import SectionWrapper from '../styles/SectionWrapper.style';
import SectionWrapperHeader from '../styles/SectionWrapperHeader.style';
import SectionWrapperLink from '../styles/SectionWrapperLink.style';

function About() {
  return (
    <SectionWrapper id="about">
      <SectionWrapperHeader>
        About
      </SectionWrapperHeader>
      This app was created during a course on
      <SectionWrapperLink href="https://profy.dev" target="_blank" rel="noopener noreferrer"> profy.dev </SectionWrapperLink>
      with the goal to implement
      a pixel-perfect real-world application with professional workflows
      and tools like Kanban, ClickUp, Figma, GitHub, pull requests and code
      reviews.
      <SectionWrapperLink href="https://profy.dev/employers" target="_blank" rel="noopener noreferrer"> Click here for more information.</SectionWrapperLink>
    </SectionWrapper>
  );
}

export default About;
