import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../data";
import Rating from "../rating/Rating";

export default function ProductScreen(props) {
    const {id}=useParams()
  const product = data.products.find((x) => x.id === id);
 console.log(product);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <div>
    <Link to="/">Back to Home</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name} />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating rating={product.rating} reviews={product.numReviews} />
            </li>
            <li>Price: ${product.price}</li>
            <li>
              Description:<p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card cardBody">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="sucess">In Stock</span>
                    ) : (
                      <span className="danger">Out of Stock</span>
                    )}
                  </div>
                </div>
              </li>
              <li><button className="primary block">Add to cart</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
