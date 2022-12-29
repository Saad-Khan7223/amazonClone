import React from 'react'
import Product from "../products/Product";
import data from "../../data";
export default function HomeScreen() {
  return (
    <div className="row center">
    {data.products.map((product) => {
      return <Product key={product.id} product={product} />;
    })}
  </div>
  )
}
