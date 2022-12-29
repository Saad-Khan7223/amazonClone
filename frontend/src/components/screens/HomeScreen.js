import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../products/Product";
import LoadingBox from "../loadingbox/LoadingBox";
import MessageBox from "../messagebox/MessageBox";
export default function HomeScreen() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/products");
        setLoading(false);
        setProduct(data);
      } catch (err) {
        setErr(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : err ? (
        <MessageBox err={err} variant='danger' />
      ) : (
        <div className="row center">
          {product.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
}
