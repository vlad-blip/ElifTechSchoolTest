"use client";

import { useRef } from "react";
import { fetchHistory } from "@/store/historySlice";
import { useDispatch } from "react-redux";

export default function HistoryForm() {
  const dispatch = useDispatch();
  const formRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(
      fetchHistory({
        email: formRef.current.email.value,
        phone: formRef.current.phone.value,
      })
    );
  };
  return (
    <form
      className="flex flex-col gap-5 w-fit h-fit"
      ref={formRef}
      onSubmit={submitHandler}
    >
      <label className="flex gap-2 justify-between items-center">
        Email:
        <input
          name="email"
          className="p-2 rounded-md"
          type="email"
          placeholder="Write your email"
        />
      </label>
      <label className="flex gap-2 justify-between items-center">
        Phone:
        <input
          name="phone"
          className="p-2 rounded-md"
          type="tel"
          pattern="[0-9]+"
          placeholder="Write your phone"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-xl text-white py-2 rounded-md"
      >
        Find your order
      </button>
    </form>
  );
}
