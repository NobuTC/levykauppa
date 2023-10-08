import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CategoryPage() {
  const { categoryId } = useParams();
  const [categoryName, setCategoryName] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching category name and products based on categoryId
    // Replace this with actual API calls or data loading logic
    if (categoryId === "1") {
      setCategoryName("Electronics");
      setProducts(["Product 1", "Product 2", "Product 3"]);
    } else if (categoryId === "2") {
      setCategoryName("Clothing");
      setProducts(["Shirt", "Jeans", "Hat"]);
    }
  }, [categoryId]);

  return (
    <div className="category-page">
      <h1>{categoryName} Category </h1>
      <div>
        <h2>Products in {categoryName}:</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CategoryPage;
