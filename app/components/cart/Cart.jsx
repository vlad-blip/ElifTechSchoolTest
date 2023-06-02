"use client";

import { useSelector } from "react-redux";
import CartList from "./CartList";

export default function Cart({ onSubmit }) {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="flex flex-col justify-between">
      <CartList />
      <div className="flex items-center gap-10">
        <p className="text-3xl">
          Total price: <span className="font-bold">{cart.totalPrice}</span>
        </p>
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
