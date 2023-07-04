import React from 'react';
import useProductList from '../../hooks/useProductList';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../hooks/counterSlice';
import Rating from "@mui/material/Rating";

function ProductCard() {
  const products = useProductList();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.imageUrl} alt='product'/>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p><Rating value={product.rating} precision={0.5} readOnly style={{ color: "black" }} /> {product.rating}/5 ({product.reviews.length})</p>
          {/* Additional product details */}
          <button onClick={() => handleAddToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
