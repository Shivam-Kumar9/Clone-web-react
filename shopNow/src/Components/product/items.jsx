import React, { useEffect, useState } from 'react';
import Card from './card.jsx';
import './items.css';

function Items() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await res.json();
        setItems(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="items-loading">Loading products...</div>;
  }

  if (error) {
    return <div className="items-error">Error: {error}</div>;
  }

  return (
    <div className="items-container">
      <h2 className="items-title">Our Products</h2>
      <div className="items-grid">
        {items.length > 0 ? (
          items.map((item) => <Card key={item.id} product={item} />)
        ) : (
          <p className="items-empty">No products available</p>
        )}
      </div>
    </div>
  );
}

export default Items;