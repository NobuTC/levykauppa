import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const callBackendAPI = async () => {
    const response = await fetch("/api/product/" + productId);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }

    setProduct(body.message);
    return body;
  };

  useEffect(() => {
    callBackendAPI();
  }, []);

  if (!product) return null;

  return (
    <div className="product-page">
      <h1>Product Page</h1>
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>Description: {product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
}

export default ProductPage;
