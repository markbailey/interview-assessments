import React from 'react';
import PropTypes from 'prop-types';

import { Div } from './Container.styled';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

function Container({ children }) {
  return (
    <Div>
      {children}
    </Div>
  );
}


Container.propTypes = propTypes;
Container.defaultProps = {};
export default Container;