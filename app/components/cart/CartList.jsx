import { useSelector } from "react-redux";

import CartItem from "./CartItem";

export default function CartList() {
  const cartItems = useSelector((state) => state.cart.entities);

  return (
    <ul className="h-[65vh] w-2/3 flex flex-col gap-4 mx-auto overflow-auto">
      {cartItems.map((item) => (
        <li key={item._id}>
          <CartItem {...item} />
        </li>
      ))}
    </ul>
  );
}
