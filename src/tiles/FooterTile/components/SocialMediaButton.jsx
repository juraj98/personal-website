import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import s from 'styles';

import Icon from 'components/Icon';

const Button = styled.a`
  color: rgba(255, 255, 255, 0.8);
  border: 0.125rem solid rgba(255, 255, 255, 0.8);
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  margin: 0.5rem;
  width: 3rem;
  height: 3rem;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  :hover,
  :focus {
    color: ${s.colors.red};
    border-color: ${s.colors.red};
  }
`;

function SocialMediaButton({ link, icon }) {
  return (
    <Button href={link} target="_blank" rel="noreferrer noopener">
      <Icon>{icon}</Icon>
    </Button>
  );
}

SocialMediaButton.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SocialMediaButton;
