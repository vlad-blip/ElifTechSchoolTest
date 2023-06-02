"use client";

import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { fetchProductByShop } from "@/store/productSlice";

export default function Shop({ title, _id, selected, disabled, onSelect }) {
  const dispatch = useDispatch();
  console.log(disabled);

  const selectShop = useCallback(() => {
    dispatch(fetchProductByShop(title));
    onSelect(_id);
  }, [dispatch, title, _id, onSelect]);

  return (
    <button
      className={`${
        selected ? "outline" : ""
      } bg-blue-300 px-10 py-5 w-full rounded-md text-xl`}
      onClick={selectShop}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
