import React from 'react';
import PropTypes from 'prop-types';

import { Card, Heading } from './ItemCard.styled';

const propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  inverted: PropTypes.bool
};

const defaultProps = {
  type: 'feed',
  inverted: false
};

function ItemCard({ id, type, inverted, ...otherProps }) {
  return (
    <Card {...otherProps} inverted={inverted}>
      <Heading>{type === 'feed' ? 'article' : type}</Heading>
      <small>{id}</small>
    </Card>
  );
}

ItemCard.propTypes = propTypes;
ItemCard.defaultProps = defaultProps;
export default ItemCard;
