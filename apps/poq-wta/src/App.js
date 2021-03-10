
import React, { useEffect, useState } from 'react';

import { Loader, RemoveButton } from './atoms';
import { GridContainer, GridItem, ProductCard } from './molecules';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedProductIds, setSelectedProductIds] = useState([]);

  const toggleSelectedProduct = (id) => {
    const newSelectedProductIds = [...selectedProductIds];
    const index = newSelectedProductIds.indexOf(id);
    
    if (index > -1) newSelectedProductIds.splice(index, 1);
    else newSelectedProductIds.push(id);

    setSelectedProductIds(newSelectedProductIds);
  };

  const getProducts = () => 
    fetch('https://run.mocky.io/v3/fca7ef93-8d86-4574-9a4a-3900d91a283e')
      .then((response) => response.json())
      .then((data) => {
          setProducts(data.filter((item) => JSON.parse(item.available?.toLowerCase())));
          setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });

  const removeProducts = () => {
    setIsLoading(true);
    fetch(
      'API_TO_REMOVE_PRODUCTS_AND_RETURN_UPDATED_PRODUCT_LIST',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(selectedProductIds)
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.filter((item) => JSON.parse(item.available?.toLowerCase())))
        setSelectedProductIds([]);
        setIsLoading(false);
      })
      .catch((error) => { 
        console.error(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : null}
      <div className="navbar">
        <RemoveButton
          selectedQuantity={selectedProductIds.length}
          onClick={removeProducts}
        />
      </div>

      <GridContainer>
        {products.length === 0 ? (
          <GridItem>There are no products currently available</GridItem>
        ) : null}

        {products
          .map((product) => (
            <GridItem key={product.productId}>
              <ProductCard
                {...product}
                onToggleSelected={() => toggleSelectedProduct(product.productId)}
              />
            </GridItem>
          ))}
      </GridContainer>
    </>
  );
}

export default App;
