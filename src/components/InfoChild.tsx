import React from 'react';
import * as S from '../styles/InfoSection.style';

interface InfoChildProps {
  id: "how-it-works" | "about";
  headline: "About" | "How it works";
  children: React.ReactNode;
}

function InfoChild({ id, headline, children }:InfoChildProps) {
  return (
    <S.InfoStyled id={id}>
      <S.InfoSectionHeader>{ headline }</S.InfoSectionHeader>
      { children }
    </S.InfoStyled>
  );
}

export default InfoChild;
