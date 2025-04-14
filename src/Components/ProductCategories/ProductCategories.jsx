import React, { useState } from 'react';
import './ProductCategories.css';

function ProductCategories() {
  const [openSection, setOpenSection] = useState('');

  const handleToggle = (section) => {
    setOpenSection(prev => (prev === section ? '' : section));
  };

  return (
    <div className='Product-categories'>
      <div className="Category-sidebar">

        <ul className='categories'>
          <li onClick={() => handleToggle('Products')} className={`section-header ${openSection === 'Products' ? 'clicked': ''}`}>
            <h3>
              Products
              <i className={openSection === 'Products' ? 'fa-solid fa-caret-down' : 'fa-solid fa-caret-up'}></i>
            </h3>
          </li>
          {
            openSection === 'Products' && (
              <>
                <li>BESTSELLERS</li>
                <li>NEW LAUNCH</li>
                <li>TOP BRANDS</li>
                <li>HIGH IN DEMAND</li>
                <li>RECENT</li>
              </>
            )
          }
        </ul>

        <ul className='others'>
          <li onClick={() => handleToggle('Overview')} className={`section-header ${openSection === 'Overview' ? 'clicked': ''}`}>
            <h3>
              Overview
              <i className={openSection === 'Overview' ? 'fa-solid fa-caret-down' : 'fa-solid fa-caret-up'}></i>
            </h3>
          </li>
          {
            openSection === 'Overview' && (
              <>
                <li>FAQ</li>
                <li>Review</li>
                <li>Benefits</li>
                <li>Overview</li>
              </>
            )
          }
        </ul>

      </div>
    </div>
  );
}

export default ProductCategories;
