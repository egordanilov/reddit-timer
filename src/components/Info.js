import React from 'react';
import { string, node } from 'prop-types';
import * as S from '../styles/InfoSectionWrapper.style';

function Info({ id, headline, children }) {
  return (
    <S.InfoStyled id={id}>
      <S.InfoSectionHeader>{ headline }</S.InfoSectionHeader>
      { children }
    </S.InfoStyled>
  );
}

Info.propTypes = {
  id: string.isRequired,
  headline: string.isRequired,
  children: node.isRequired,
};

export default Info;
