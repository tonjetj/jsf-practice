import React from 'react';
import Layout from './components/layout/Layout';
import Products from './pages/products/Products';
import Product from './pages/product/Product';
import { Routes, Route } from 'react-router-dom';
// import Cart from './components/cart/Cart';

function App() {
  return (
    <div className="App">
      <Layout>
      <h1>Velkommen til nettbutikken</h1>
      <p>Utforsk vårt utvalg av produkter:</p>
      {/* <Cart/> */}
      <Products />
      <Routes>
       <Route path="/" component={Products} />
        <Route path="/product/:id" component={Product} />
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
