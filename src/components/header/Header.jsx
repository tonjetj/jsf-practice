import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useProductList from '../../hooks/useProductList';
import Search from '../search/Search';
import { IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from '../cart/Cart';

const Header = () => {
  const productList = useProductList();
  const cartItems = useSelector((state) => state.counter.cartItems);
  const [isCartOpen, setCartOpen] = useState(false);

  const handleSearch = (searchTerm) => {
    const filtered = productList.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filtered);
  };

  const handleCartToggle = () => {
    setCartOpen(!isCartOpen);
  };


  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <Search onSearch={handleSearch} productList={productList} />
      <IconButton onClick={handleCartToggle}>
        <Badge badgeContent={cartItemCount} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      {isCartOpen && <Cart />}
    </header>
  );
};

export default Header;
