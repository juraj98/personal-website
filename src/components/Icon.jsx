import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 1.5rem;
  color: inherit;
`;

function Icon({ className, children }) {
  return <Wrapper className={`${className} icon-${children}`} />;
}

Icon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  className: null,
};

export default Icon;
