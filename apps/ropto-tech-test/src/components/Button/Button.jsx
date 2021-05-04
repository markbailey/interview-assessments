import React from 'react';
import PropTypes from 'prop-types';

import { ButtonRoot } from './Button.styled';

const propTypes = {
  dark: PropTypes.bool,
};

const defaultProps = {
  dark: false,
};

function Button({ dark, ...otherProps }) {
  return (
    <ButtonRoot {...otherProps} dark={dark} />
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
