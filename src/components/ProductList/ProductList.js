import React from 'react';
import Product from '../Product/Product';
import './ProductList.css';

const ProductList = (props) => {
  const productList = props.products;
  const product = productList.map(product => {
    return <Product key={product.id} {...product} />
  });
  return (
    <div className="product-container">
      {product}
    </div>
  )
}

export default ProductList;