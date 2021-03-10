import React from 'react';
import './button.css';

function RemoveButton({ selectedQuantity, ...otherProps }) {
  return (
    <button
      {...otherProps}
      className="button"
      disabled={selectedQuantity === 0}
    >
      {`Remove ${selectedQuantity} selected products`}
    </button>
  );
}

export default RemoveButton;
