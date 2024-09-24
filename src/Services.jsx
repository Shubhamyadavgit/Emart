import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import './App.css'
const Services = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json")
      .then((res) => res.json())
      .then((result) => {
        const categories = result.categories;
        const allProducts = categories.flatMap(category => category.category_products);
        setData(allProducts);
      })
      .catch((error) => console.error("Error fetching the data", error));
  }, []);

  console.log(data);

  return (
    <div>
      <div className="container">
        {data.map((e) => (
          <Card key={e.id} product={e} />
        ))}
      </div>
    </div>
  );
};

export default Services;
