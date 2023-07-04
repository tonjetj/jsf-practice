import { API_BASE, Products } from '../api/api';

const fetchProducts = async () => {
  const url = API_BASE + Products;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error occurred while retrieving products:', error);
    return [];
  }
};

export default fetchProducts;
