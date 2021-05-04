import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { HackerNewsContext } from '../../context/HackerNews';
import ItemCard from '../ItemCard';
import { Container, Item } from './Grid.styled';

const propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.number),
  ]),
  maxColumns: PropTypes.number,
  invert: PropTypes.bool,
};

const defaultProps = {
  items: [],
  maxColumns: undefined,
  invert: false,
};

function Grid({
  items,
  maxColumns,
  invert,
  ...otherProps
}) {
  const { setSelectedItemId, items: itemMetas } = useContext(HackerNewsContext);

  const getType = (id) => {
    const item = itemMetas.find((item) => item.id === id);
    return item ? item.type : undefined;
  };

  return (
    <Container {...otherProps} maxColumns={maxColumns}>
      {items.map((id) => {
        return (
          <Item key={id}>
            <ItemCard
              id={id} 
              type={getType(id)}
              inverted={invert}
              onClick={() => setSelectedItemId(id)}
            />
          </Item>
        );
      })}
    </Container>
  )
}

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;
export default Grid;
