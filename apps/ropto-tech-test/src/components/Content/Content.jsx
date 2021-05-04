import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './Content.styled';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  show: PropTypes.bool,
  top: PropTypes.bool
};

const defaultProps = {
  show: false,
  top: false,
};

function Content({ children, show, top, ...otherProps }) {
  return (
    <Wrapper {...otherProps} show={show} top={top}>
      {children}
    </Wrapper>
  )
}

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;
export default Content;
