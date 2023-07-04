import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../hooks/counterSlice';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Cart() {
  const cartItems = useSelector((state) => state.counter.cartItems);
  const dispatch = useDispatch();

  const getCartItemQuantity = (productId) => {
    const cartItem = cartItems.find((product) => product.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  const getProductTotalPrice = (product) => {
    const quantity = getCartItemQuantity(product.id);
    return product.price * quantity;
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product.id));
  };

  const handleRemoveAllFromCart = (product) => {
    const quantity = getCartItemQuantity(product.id);
    for (let i = 0; i < quantity; i++) {
      dispatch(removeFromCart(product.id));
    }
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((product) => {
      const quantity = getCartItemQuantity(product.id);
      totalPrice += product.price * quantity;
    });
    return totalPrice;
  };

  return (
    <div>
    <h2>Shopping Cart</h2>
    {cartItems.length === 0 ? (
      <p>Your shopping cart is currently empty. </p>
    ) : (
      <div>
        <ul>
          {cartItems.map((product) => (
            <li key={product.id}>
              <div>
              <p>{product.title} - {product.price}{' '}
              {getCartItemQuantity(product.id) > 1 && (
                <span> kr x {getCartItemQuantity(product.id)}</span>
              )}</p>
              <p>Totalpris: {getProductTotalPrice(product)} kr</p>
              </div>
              <button onClick={() => handleAddToCart(product)}>Add</button>
              <button onClick={() => handleRemoveFromCart(product)}>Remove 1</button>
              <button onClick={() => handleRemoveAllFromCart(product)}>Remove All</button>
            </li>
          ))}
        </ul>
        <h3>Sum: {getTotalPrice()} kr</h3>
      </div>
    )}
  </div>
  );
}

export default Cart;
