import React from 'react';
import styled from 'styled-components';
import s from 'styles';

const Wrapper = styled.section`
  height: calc(100vh - 1rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  justify-content: center;
  position: relative;
`;

const Title = styled.h1`
  color: ${s.colors.textPrimary};
  font-size: 3rem;
  line-height: 1.25;
  text-shadow: 1px 1px ${s.colors.cyan}, 2px 2px ${s.colors.red};
`;

const NoBreak = styled.span`
  white-space: nowrap;
`;

const LetterSpace = styled.span`
  width: 0.125rem;
  display: inline-block;
`;

const Subtitle = styled.h2`
  color: ${s.colors.textSecondary};
  font-size: 1.5rem;
  padding: 1rem 0;
`;

const FlexWrap = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`;

const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2rem;
  right: 2rem;
  border-radius: 2.5rem;
  border: 0.125rem solid ${s.colors.red};
  width: 6rem;
  height: 2rem;
  color: ${s.colors.red};
  outline: none;
  background: transparent;
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${s.colors.red}10;
  }
`;

function TitleTile() {
  return (
    <Wrapper>
      <ContactButton>Let&apos;t talk</ContactButton>
      <Title>
        <NoBreak>Hi, I’m Juraj,</NoBreak>
        &nbsp;
        <FlexWrap>
          <NoBreak>
            Full-S
            <LetterSpace />
            tack
          </NoBreak>
          &nbsp;
          <NoBreak>developer</NoBreak>
        </FlexWrap>
      </Title>
      <Subtitle>Writing beautiful code for beautiful products.</Subtitle>
    </Wrapper>
  );
}

export default TitleTile;
