import React from 'react';
import { motion } from 'framer-motion';
import './GenericMedicine.css';

function GenericMedicine() {
  return (
    <motion.div 
      className="generic-service-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div className="service-header"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1>Generic Medicine Manufacturing</h1>
        <p>Affordable. Scalable. WHO-GMP Compliant.</p>
      </motion.div>

      <motion.div className="service-intro"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          We specialize in the manufacturing of high-quality generic medicines for companies around the world...
        </p>
      </motion.div>

      <motion.div className="service-benefits"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>What We Offer</h2>
        <ul>
          <li>Contract manufacturing of tablets, capsules, syrups, injections, and more.</li>
          <li>Private labeling with custom packaging and branding.</li>
          <li>Regulatory documentation support (as required).</li>
          <li>Consistent quality with international compliance (WHO-GMP).</li>
          <li>Competitive pricing for bulk orders and long-term partnerships.</li>
        </ul>
      </motion.div>

      <motion.div className="service-categories"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Therapeutic Categories</h2>
        <div className="categories-grid">
          <div className="category-box">Antibiotics</div>
          <div className="category-box">Cardiology</div>
          <div className="category-box">Diabetology</div>
          <div className="category-box">Gastroenterology</div>
          <div className="category-box">Neurology</div>
          <div className="category-box">Vitamins & Supplements</div>
        </div>
      </motion.div>

      <motion.div className="service-cta"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3>Looking for a reliable generic medicine manufacturer?</h3>
        <p>We are ready to partner with you. Let’s grow together.</p>
        <button>Enquire Now</button>
      </motion.div>
    </motion.div>
  );
}

export default GenericMedicine;
