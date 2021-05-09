// import React from 'react';
import IColumnProps from './interfaces/IColumnProps';
import { GridColumn } from './grid.styled';

function Column(props: IColumnProps) {
  return (
    <GridColumn>
      {props.children}
    </GridColumn>
  )
}

export default Column;
