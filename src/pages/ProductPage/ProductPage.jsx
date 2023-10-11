import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { albumId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const callBackendAPI = async () => {
      const response = await fetch("/api/product/" + albumId);
      const body = await response.json();

      if (response.status !== 200) {
        throw Error(body.data);
      }

      setProduct(body.data);
    };

    // Call the backend API only when albumId changes
    if (albumId) {
      callBackendAPI();
    }
  }, [albumId]);

  if (!product) return null;

  return (
    <div className="product-page">
      <h1>Album Page</h1>
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>Description: {product.info}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
}

export default ProductPage;
