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

function BackIcon({ color, size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={`${size}px`}
      height={`${size}px`}
      fill={color}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
    </svg>
  );
}

BackIcon.propTypes = propTypes;
BackIcon.defaultProps = defaultProps;
export default BackIcon;
