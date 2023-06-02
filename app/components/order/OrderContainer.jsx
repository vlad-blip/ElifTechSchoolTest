"use client";

import OrderList from "./OrderList";

export default function OrderContainer({ entities, totalPrice }) {
  return (
    <div className="grid grid-cols-3 m-10 bg-blue-200 rounded-xl p-10">
      <OrderList className="col-span-2" list={entities} />
      <p className="text-4xl self-center text-center">
        Total price: {totalPrice}
      </p>
    </div>
  );
}
