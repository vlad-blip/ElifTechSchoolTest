"use client";

import Product from "./Product";
import { useSelector } from "react-redux";

export default function ProductList() {
  const products = useSelector((state) => state.product.entities);

  return (
    <ul className="grid grid-cols-3 gap-10">
      {products.map((product) => (
        <li key={product._id}>
          <Product {...product} />
        </li>
      ))}
    </ul>
  );
}
