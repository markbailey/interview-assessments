import React from 'react';
import ProptTypes from 'prop-types';

const propTypes = {
  color: ProptTypes.string,
  size: ProptTypes.number
};

const defaultProps = {
  color: '#000000',
  size: 24
};

function CloseIcon({ color, size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={`${size}px`}
      height={`${size}px`}
      fill={color}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
    </svg>
  );
}

CloseIcon.propTypes = propTypes;
CloseIcon.defaultProps = defaultProps;
export default CloseIcon;
