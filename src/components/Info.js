import React from 'react';
import { string, node } from 'prop-types';
import InfoStyled from '../styles/InfoStyled.style';
import InfoSectionHeader from '../styles/InfoSectionHeader.style';

function Info({ id, headline, children }) {
  return (
    <InfoStyled id={id}>
      <InfoSectionHeader>{ headline }</InfoSectionHeader>
      { children }
    </InfoStyled>
  );
}

Info.propTypes = {
  id: string.isRequired,
  headline: string.isRequired,
  children: node.isRequired,
};

export default Info;
