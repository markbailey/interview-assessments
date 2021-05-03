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

function PollIcon({ color, size }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={`${size}px`}
      height={`${size}px`}
      fill={color}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"/>
    </svg>
  );
}

PollIcon.propTypes = propTypes;
PollIcon.defaultProps = defaultProps;
export default PollIcon;
