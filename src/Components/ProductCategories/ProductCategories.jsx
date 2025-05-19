import React, { useState, useRef, useEffect } from 'react';
import './ProductCategories.css';

function ProductCategories({ onCategoryChange,selectedCategory}) {
  const [openSection, setOpenSection] = useState('');
  const menuRef = useRef(null);
  const [correntCategory, setCurrentCategory] = useState('')

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenSection('');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = (section) => {
    setOpenSection(prev => (prev === section ? '' : section));
  };

  return (
    <div className="Product-categories" ref={menuRef}>
      {/* <div className="Category-sidebar">
        <ul className="categories">
          <li
            onClick={() => handleToggle('Products')}
            className={`section-header ${openSection === 'Products' ? 'clicked' : ''}`}
          >
            <h3>
              {selectedCategory === correntCategory ? correntCategory : 'All' }
            </h3>
          </li>
            <>
              <li onClick={() => {onCategoryChange('BestSellers'), setOpenSection(''), setCurrentCategory('BestSellers')} }>BESTSELLERS</li>
              <li onClick={() => {onCategoryChange('Bundle'), setOpenSection(''),setCurrentCategory('Bundle')}}>BUNDLES</li>
              <li onClick={() => {onCategoryChange('NewLaunch'), setOpenSection(''), setCurrentCategory('NewLaunch')}}>NEW LAUNCH</li>
              <li onClick={() => {onCategoryChange('TopBrands'), setOpenSection(''), setCurrentCategory('TopBrands')}}>TOP BRANDS</li>
              <li onClick={() => {onCategoryChange('HighDemand'), setOpenSection(''), setCurrentCategory('HighDemand')}}>HIGH IN DEMAND</li>
            </>
        </ul>
      </div> */}
    </div>
  );
}

export default ProductCategories;
