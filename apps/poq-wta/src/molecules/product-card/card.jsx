import React from 'react';
import './card.css';

function ProductCard(props) {
  const {
    productId,
    name,
    price,
    priceWas,
    quantity,
    lowOnStock,
    imageUrl,
    promotionBadge,
    onToggleSelected
  } = props;

  const isLowOnStock = JSON.parse(lowOnStock?.toLowerCase());
  const hasStock = quantity > 0;

  return (
    <div className="product-card">
      <input type="checkbox" onChange={() => onToggleSelected(productId)} />
      <div className="product-card__media">
        <img src={imageUrl} alt={name} className="product-card__image"/>

        {promotionBadge ? (
          <div className="product-card__promo-badge">{promotionBadge}</div>
         ) : null}
      </div>
      <div className="product-card__details">
        <span>{name}</span><br />
        <strong>{`£${price}`}</strong>

        {priceWas ? (
          <span className="product-card__was-price">
            {`£${priceWas}`}
          </span>
         ) : null}

        <br />
        {hasStock ? (
          <>
            <span className="product-card__quantity">
              {`${quantity} in stock`}
            </span>
            {isLowOnStock ? (
              <>
                <br />
                <span className="product-card__low-stock">
                  low on stock
                </span>
              </>
            ) : null}
          </>
        ) : (
          <span className="product-card__no-stock">
            out of stock
          </span>
        )}        
      </div>
    </div>
  )
}

export default ProductCard;
