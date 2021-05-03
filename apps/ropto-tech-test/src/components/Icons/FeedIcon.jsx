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

function FeedIcon({ color, size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
      width={`${size}px`}
      height={`${size}px`}
      fill={color}
    >
      <g>
        <path d="M0,0h24v24H0V0z" fill="none"/>
      </g>
      <g>
        <path d="M16,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V8L16,3z M19,19H5V5h10v4h4V19z M7,17h10v-2H7V17z M12,7H7 v2h5V7z M7,13h10v-2H7V13z"/>
      </g>
    </svg>
  );
}

FeedIcon.propTypes = propTypes;
FeedIcon.defaultProps = defaultProps;
export default FeedIcon;
