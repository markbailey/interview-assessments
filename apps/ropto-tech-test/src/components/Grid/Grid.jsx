import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { HackerNewsContext } from '../../context/HackerNews';
import ItemCard from '../ItemCard';
import { GridContainer, GridItem } from './Grid.styled';

const propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.number),
  ]),
  maxColumns: PropTypes.number,
  iconSize: PropTypes.number,
};

const defaultProps = {
  items: [],
  maxColumns: undefined,
  iconSize: undefined,
};

function Grid({
  items,
  maxColumns,
  iconSize,
  ...otherProps
}) {
  const { setSelectedItemId, items: itemMetas } = useContext(HackerNewsContext);

  const getType = (id) => {
    const item = itemMetas.find((item) => item.id === id);
    return item ? item.type : null;
  };

  return (
    <GridContainer {...otherProps} maxColumns={maxColumns}>
      {items.map((id) => {
        return (
          <GridItem key={id}>
            <ItemCard
              id={id} 
              type={getType(id)}
              iconSize={iconSize}
              onClick={() => setSelectedItemId(id)}
            />
          </GridItem>
        );
      })}
    </GridContainer>
  )
}

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;
export default Grid;
