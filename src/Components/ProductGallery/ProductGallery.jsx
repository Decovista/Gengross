import React from 'react';
import './ProductGallery.css'
import resouce from '../resouce';
import ContactPopup from '../Contact-popup/ContactPopup';

function ProductGallery({ selectedCategory, setShowContact, showContact}) {
  const Products = [
    { id: '1', category: 'bestSellers', title: 'Product1', picture: resouce.Product1,
    description: 'High quality poultry feed', },
    { id: '2', category: 'bundle', picture: resouce.Product2, title: 'acilock2', description: 'lorem is a good man is a good man is a good man', },
    { id: '3', category: 'bestSellers', title: 'Product2',  picture: resouce.Product2,
    description: 'Enriched with proteins and vitamins', },
    { id: '4', category: 'bundle', picture: resouce.HumanHealth1, title: 'acilock4', description: 'lorem is a good man is a good man is a good man' },
    { id: '5', category: 'bestSellers', title: 'Product3', picture: resouce.Product3,
        description: 'Improves egg production and growth', },
    { id: '6', category: 'bestSellers',  title: 'Feed Product 4', picture: resouce.Product1,
     description: 'Balanced nutrition for all poultry', }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? Products
    : Products.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className='Productgallery'>
      <div className="products">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
           <img src={product.picture} alt="product" />
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
