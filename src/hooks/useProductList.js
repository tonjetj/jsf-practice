import { useState, useEffect } from 'react';
import fetchProducts from './fetchProducts';
import modifyData from './modifyData';

const useProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      const modifiedData = modifyData(fetchedProducts);
      setProducts(modifiedData);
    };

    getProducts();
  }, []);

  return products;
};

export default useProductsList;
