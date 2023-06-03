"use client";

import HistoryForm from "../components/form/HistoryForm";
import OrderContainer from "../components/order/OrderContainer";

import { useSelector } from "react-redux";

export default function History() {
  const orderList = useSelector((state) => state.history.orderList);

  return (
    <main className="h-full grid grid-rows-3 gap-y-4">
      <div className="flex flex-col items-center pt-5 bg-blue-100 row-span-1 rounded-xl">
        <h1 className="text-4xl mb-4">Look up your order history</h1>
        <HistoryForm />
      </div>
      <div className="bg-blue-100 rounded-xl row-span-2 center overflow-auto">
        <ul>
          {orderList.map((order, i) => (
            <li key={i}>
              <OrderContainer {...order} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
