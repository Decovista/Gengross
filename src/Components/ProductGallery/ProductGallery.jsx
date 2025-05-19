import React from 'react';
import './ProductGallery.css'
import resouce from '../resouce';
import ContactPopup from '../Contact-popup/ContactPopup';

function ProductGallery({ selectedCategory, setShowContact, showContact}) {
  const Products = [
    { id: '1', category: 'bestSellers', title: 'Neprogen', picture: resouce.productreal1,
    description: 'Optimizes Production & Renal Functions', },
    { id: '2', category: 'bundle', picture: resouce.productreal2, title: 'Poul Guard liquid', description: 'Protect from bacteria & Fungal Infections', },
    { id: '3', category: 'bestSellers', title: 'Livogen',  picture: resouce.productreal3,
    description: 'Liver liquid feed supplement for cattle, Livestock & poultry', },
    { id: '4', category: 'bundle', picture: resouce.productreal4, title: 'Poulgrow-p', description: 'Liquid Feed supplement for poultry' },
    { id: '5', category: 'bestSellers', title: 'Genferol', picture: resouce.productreal5,
        description: 'Malt Based Vitamins.', },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? Products
    : Products.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className='Productgallery'>
      <h1>Products</h1>
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
