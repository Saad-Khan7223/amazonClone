import React from 'react'
import Rating from '../rating/Rating'

export default function Product(props) {
    const {product}=props
  return (
    <div className="card" key={product.id}>
    <a href={`/product/${product.id}`}>
      <img className="medium" src={product.image} alt={product.name} />
    </a>
    <div className="cardBody">
    <a href={`/product/${product.id}`}>
        <h2>{product.name}</h2>
      </a>
     <Rating rating={product.rating} reviews={ product.numReviews} />
    <div className="price">${product.price}</div>
    </div>
  </div>
  )
}
