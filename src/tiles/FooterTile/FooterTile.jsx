import React from 'react';
import styled from 'styled-components';
import s from 'styles';

import SocialMediaButton from './components/SocialMediaButton';

const Wrapper = styled.footer`
  background-color: ${s.colors.grey};
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function FooterTile() {
  return (
    <Wrapper>
      <SocialMediaButton icon="github" link="https://github.com/juraj98/" />
      <SocialMediaButton
        icon="linkedin"
        link="https://www.linkedin.com/in/juraj-garaj/"
      />
      <SocialMediaButton icon="email" link="mailto:juraj982@email.com" />
    </Wrapper>
  );
}

export default FooterTile;
