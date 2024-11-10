import React from 'react';
import './catalog.css';  // Стилі для каталогу

const Catalog = () => {
  const catalogItems = [
    { image: '/images/ring.png', title: 'Silver Ring', description: 'Elegant silver ring with diamonds', price: 530 },
    { image: '/images/necklace.png', title: 'Gold Necklace', description: 'Beautiful gold necklace', price: 210 },
    { image: '/images/pearl_bracelet.png', title: 'Pearl Bracelet', description: 'Classic pearl bracelet', price: 120 },
    { image: '/images/earrings.png', title: 'Aquamarine Earrings', description: 'Aquamarine gemstone earrings, perfect for any occasion', price: 420 },
    { image: '/images/sapphire_necklace.png', title: 'Sapphire Necklace', description: 'Elegant sapphire pendant on a delicate silver chain', price: 350 },
  ];

  return (
    <div className="catalog-page">
      <h1>Our Products</h1>
      <div className="catalog-list">
        {catalogItems.map((item, index) => (
          <div key={index} className="catalog-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
