import React from 'react';
import styled from 'styled-components';
import 'styles/_main.css';

import TitleTile from 'tiles/TitleTile';
import AboutMeTile from 'tiles/AboutMeTile';
import SkillsTile from 'tiles/SkillsTile';
import FooterTile from 'tiles/FooterTile';

const AppWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  overflow: auto;
`;

function App() {
  return (
    <AppWrapper>
      <TitleTile />
      <AboutMeTile />
      <SkillsTile />
      <FooterTile />
    </AppWrapper>
  );
}

export default App;
