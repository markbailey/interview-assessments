// import React from 'react';
import IGridProps from './interfaces/IGridProps';
import { GridWrapper } from './grid.styled';

function Grid(props: IGridProps) {
  return (
    <GridWrapper>
      {props.children}
    </GridWrapper>
  )
}

export default Grid
