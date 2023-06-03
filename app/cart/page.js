"use client";

import { useRef } from "react";
import { useDispatch } from "react-redux";

import { sendOrder } from "@/store/cartSlice";
import Form from "../components/form/Form";
import Cart from "../components/cart/Cart";
import Map from "../components/map/Map";

export default function CartPage() {
  const dispatch = useDispatch();

  const formRef = useRef();

  const onSubmitHandler = () => {
    const form = formRef.current;

    const credentials = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      address: form.address.value,
    };
    dispatch(sendOrder(credentials));
  };
  return (
    <main className="grid grid-cols-2 gap-10 h-full">
      <div className="bg-blue-100 rounded-xl grid place-content-center">
        <Map />
        <Form ref={formRef} className="mt-4" />
      </div>
      <div className="bg-blue-100 rounded-xl p-10">
        <Cart onSubmit={onSubmitHandler} />
      </div>
    </main>
  );
}
