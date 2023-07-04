import React, { useState, useRef, useEffect } from 'react';
import { handleInputChange } from '../../hooks/searchUtils';

const Search = ({ onSearch, productList }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);

  const filteredList = productList.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const shouldDisplayScroll = filteredList.length > 5;

  const handleDocumentClick = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className='searchbar' ref={searchRef}>
      <input
        type="text"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={(event) => handleInputChange(event, setSearchTerm, onSearch)}
        onFocus={() => setSearchOpen(true)}
      />
      {searchTerm && isSearchOpen && (
        <ul className={shouldDisplayScroll ? 'search-results-scroll' : 'search-results'}>
          {filteredList.map((product) => (
            <li
              className={`search-result ${product.hasDiscount ? 'has-discount' : ''}`}
              key={product.id}
            >
              <img src={product.imageUrl} className="search-img" alt={product.title} />
              <div className='search-title'>
                {product.hasDiscount && (
                  <div className="discount-badge">{product.discount}%</div>
                )}
                <p>{product.title}</p>
                {product.hasDiscount ? (
                  <div className="price-container">
                    <p className="discounted-price">kr {product.discountedPrice}</p>
                    {product.price !== product.discountedPrice && (
                      <p className="price discounted">kr {product.price}</p>
                    )}
                  </div>
                ) : (
                  <p className="price">kr {product.price}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
