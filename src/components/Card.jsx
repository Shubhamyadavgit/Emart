import React from 'react'
import '../Styles/CardStyles.css'
const Card = ({product}) => {
    const badgeText = product.badge_text || "New Arrival";
  return (
    <div className="product-card">
    <img src={product.image} alt={product.title} />
    <h4>{product.title}</h4>
    <p>Vendor: {product.vendor}</p>
    <p>Price: ₹{product.price}</p>
    <p className="compare-price">
      Compare at: ₹{product.compare_at_price}
    </p>
 <span className="badge">{badgeText}</span>
  </div>
  )
}

export default Card