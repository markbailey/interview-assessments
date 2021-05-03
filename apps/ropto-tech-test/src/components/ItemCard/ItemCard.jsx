import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icons/Icon';
import { Card } from './ItemCard.styled';

const propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  iconSize: PropTypes.number
};

const defaultProps = {
  type: 'feed',
  iconSize: 64,
};

function ItemCard({ id, type, iconSize, ...otherProps }) {
  return (
    <Card {...otherProps}>
      <Icon name={type} size={iconSize} color="#ffffff"/>
      <small>{id}</small>
    </Card>
  );
}

ItemCard.propTypes = propTypes;
ItemCard.defaultProps = defaultProps;
export default ItemCard;
