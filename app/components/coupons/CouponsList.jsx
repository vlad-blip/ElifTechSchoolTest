"use client";

import Coupon from "./Coupon";
import { useState, useEffect } from "react";

export default function CouponsList() {
  const [couponsList, setCouponsList] = useState([]);

  useEffect(() => {
    async function fetchCoupons() {
      try {
        const response = await fetch(
          "https://eliftech-qkyz.onrender.com/coupons"
        );

        const data = await response.json();
        setCouponsList(data);
      } catch (err) {
        alert(err);
        return;
      }
    }

    fetchCoupons();
  }, []);

  return (
    <ul className="flex gap-10">
      {couponsList.length > 0 &&
        couponsList.map((coupon) => (
          <li key={coupon.code}>
            <Coupon description={coupon.description} code={coupon.code} />
          </li>
        ))}
    </ul>
  );
}
