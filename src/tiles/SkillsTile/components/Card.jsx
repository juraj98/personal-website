import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import shortid from 'shortid';
import s from 'styles';

const Wrapper = styled.div`
  min-width: 20rem;
  background-color: white;
  flex-shrink: 0;
  margin: 0 0.5rem;
  box-shadow: 20px 20px 35px 0 rgba(0, 0, 0, 0.14);

  @media (max-width: 1023px) {
    margin: 0.5rem;
  }
`;

const Title = styled.h4`
  font-size: 1.75rem;
  text-align: center;
  margin: 1rem;
  border-bottom: 1px solid ${s.colors.divider};
  padding: 0.5rem 0;
`;

const SkillTitle = styled.div`
  text-align: center;
  color: ${s.colors.red};
  font-size: 1rem;
  text-transform: uppercase;
`;

const SkillList = styled.ul`
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;

  ${({ row }) =>
    row &&
    css`
      display: flex;
      justify-content: center;
    `}
`;

const Skill = styled.li`
  font-size: 1.1rem;
  text-align: center;
  line-height: 2;
  ${({ row, lastSkill }) =>
    row &&
    css`
      display: inline-block;
      margin: 0 0.125rem;

      ${!lastSkill &&
        css`
          :after {
            content: ',';
          }
        `}
    `}
`;

function Card({ title, items }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {items.map(({ title: itemTitle, displayAsRow, skills }) => (
        <React.Fragment key={shortid()}>
          <SkillTitle>{itemTitle}</SkillTitle>
          <SkillList row={displayAsRow}>
            {skills.map((skill, i) => (
              <Skill
                row={displayAsRow}
                lastSkill={i === skills.length - 1}
                key={skill}
              >
                {skill}
              </Skill>
            ))}
          </SkillList>
        </React.Fragment>
      ))}
    </Wrapper>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      skills: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
};

export default Card;
