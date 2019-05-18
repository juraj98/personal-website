import React from 'react';
import styled from 'styled-components';
import s from 'styles';

import Card from './components/Card';

const Wrapper = styled.div`
  background-color: ${s.colors.cyan};
  padding: 0 0.5rem;
  padding-bottom: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 1023px) {
    padding: 0.5rem;
    flex-direction: column;
    align-items: stretch;
    padding-bottom: 0.5rem;
  }
`;

function SkillsTile() {
  return (
    <Wrapper>
      <Card
        title="Front-end"
        items={[
          {
            title: 'Technoligies',
            skills: ['HTML & CSS/SCSS', 'Javascript', 'Typescript'],
          },
          {
            title: 'Javascript libraries',
            skills: [
              'React',
              'Redux',
              'Styled-components',
              'Axios',
              'D3.js',
              'jQuery',
            ],
          },
        ]}
      />
      <Card
        title="Back-end"
        items={[
          {
            title: 'Technoligies',
            skills: ['Node.js', 'Express.js', 'Firebase', 'PHP'],
          },
          { title: 'Databases', skills: ['PostgreSQL', 'MongoDB', 'MySQL'] },
        ]}
      />
      <Card
        title="Other"
        items={[
          {
            title: 'Dev tools',
            skills: [
              'NPM & Yarn',
              'Git (GitHub, Bitbucket, GitLab)',
              'Visual Studio Code',
            ],
          },
          {
            title: 'Desing tools',
            skills: ['Figma', 'Zeplin', 'Miro'],
            displayAsRow: true,
          },
          {
            title: 'Agile and documentation',
            skills: ['Jira', 'Anasa', 'Confluence'],
            displayAsRow: true,
          },
          {
            title: 'Android development',
            skills: ['Kotlin', 'Java'],
            displayAsRow: true,
          },
        ]}
      />
    </Wrapper>
  );
}

export default SkillsTile;
