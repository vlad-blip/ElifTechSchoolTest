"use client";

import { useRef } from "react";
import Form from "../components/form/Form";
import Cart from "../components/cart/Cart";
import Map from "../components/map/Map";

export default function CartPage() {
  const formRef = useRef();

  const onSubmitHandler = (cart) => {
    const form = formRef.current;

    const credentials = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      address: form.address.value,
    };

    async function sendOrder() {
      try {
        const response = await fetch("http://localhost:5000/order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            credentials,
            cart,
          }),
        });
        const data = await response.text();

        alert(data);
      } catch (err) {
        alert(err);
      }
    }

    sendOrder();
  };
  return (
    <main className="grid grid-cols-2 gap-10 h-full">
      <div className="bg-blue-100 rounded-xl grid place-content-center">
        <Map />
        <Form ref={formRef} className="mt-4" />
      </div>
      <div className="bg-blue-100 rounded-xl p-20">
        <Cart onSubmit={onSubmitHandler} />
      </div>
    </main>
  );
}
