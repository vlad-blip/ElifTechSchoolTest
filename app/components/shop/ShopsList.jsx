"use client";
import { useState, useEffect } from "react";

import Shop from "./Shop";

export default function ShopsList() {
  const [shops, setShops] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    async function getShops() {
      const response = await fetch("http://localhost:5000/shops");
      const shops = await response.json();

      setShops(shops);
    }

    getShops();
  }, []);

  const selectShopHandler = (_id) => {
    setSelected(_id);
  };

  return (
    <ul className="flex flex-col gap-10 mx-auto w-1/2 mt-10">
      {shops &&
        shops.map((shop) => (
          <li key={shop._id}>
            <Shop
              {...shop}
              onSelect={selectShopHandler}
              selected={shop._id === selected}
              disabled={shop._id !== selected && selected !== ""}
            />
          </li>
        ))}
    </ul>
  );
}
