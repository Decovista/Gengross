import React from 'react';
import './ProductGallery.css'
import resouce from '../resouce';
import ContactPopup from '../Contact-popup/ContactPopup';

function ProductGallery({ selectedCategory, setShowContact, showContact}) {
  const Products = [
    { id: '1', category: 'bestSellers', title: 'Product', picture: resouce.Product1,
    description: 'Loading.........', },
    { id: '2', category: 'bundle', picture: resouce.Product2, title: 'Product', description: 'Loading.........', },
    { id: '3', category: 'bestSellers', title: 'Product',  picture: resouce.Product2,
    description: 'Loading.........', },
    { id: '4', category: 'bundle', picture: resouce.HumanHealth1, title: 'Product', description: 'Loading.........' },
    { id: '5', category: 'bestSellers', title: 'Product', picture: resouce.Product3,
        description: 'Loading.........', },
    { id: '6', category: 'bestSellers',  title: 'Product ', picture: resouce.Product1,
     description: 'Loading.........', }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? Products
    : Products.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className='Productgallery'>
      <div className="products">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
           <img src={resouce.ComingSoon} alt="product" />
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <button className='globle-btn' onClick={() => setShowContact(true)}>Get</button>
          </div>
        ))}
        {showContact && <ContactPopup setShowContact={setShowContact} />}
      </div>
    </div>
  );
}

export default ProductGallery;
