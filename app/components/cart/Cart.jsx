"use client";

import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCoupon } from "@/store/cartSlice";
import CartList from "./CartList";

export default function Cart({ onSubmit }) {
  const couponRef = useRef("");

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const addCouponHandler = () => {
    dispatch(addCoupon(couponRef.current.value));
  };
  return (
    <div className="flex flex-col justify-between gap-4">
      <CartList />
      <div className="flex items-center gap-10">
        <p className="text-3xl">
          Total price: <span className="font-bold">{cart.totalPrice}</span>
        </p>
        <div className="rounded-md overflow-hidden">
          <input
            ref={couponRef}
            className="py-5 px-2 text-xl"
            type="text"
            placeholder="Coupon code"
          />
          <button
            className="bg-black text-white py-5 text-xl px-4"
            onClick={addCouponHandler}
          >
            Apply
          </button>
        </div>
        <button
          className="bg-white text-2xl py-4 px-8 rounded-md"
          onClick={onSubmit.bind(null, cart)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
