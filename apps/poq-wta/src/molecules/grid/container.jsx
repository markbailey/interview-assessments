import React from 'react';
import './grid.css';

function GridContainer({ children }) {
  return (
    <div className="grid-container">
      {children}
    </div>
  );
}

export default GridContainer;
