import React from 'react';
import styled from 'styled-components';
import s from 'styles';

const Wrapper = styled.section`
  background-color: ${s.colors.red};
  padding: 7rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
`;

const Title = styled.h3`
  font-size: 2rem;
  padding-bottom: 1.5rem;
`;

const Content = styled.p`
  max-width: 50rem;
  text-align: center;
  line-height: 1.5;
  font-size: 1.25rem;
`;

function AboutMeTile() {
  return (
    <Wrapper>
      <Title>About me</Title>
      <Content>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
        sapiente esse veniam voluptate. Mollitia illo, nobis ex exercitationem
        alias nam ipsam harum dolore nihil ipsum quam veniam nesciunt sapiente
        veritatis.
      </Content>
    </Wrapper>
  );
}

export default AboutMeTile;
