import Image from "next/image";

import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "@/store/cartSlice";

export default function CartItem({
  _id,
  title,
  price,
  totalPrice,
  image,
  quantity,
}) {
  const item = useSelector((state) =>
    state.cart.entities.find((item) => item._id === _id)
  );
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(addItem(item));
  };

  const removeItemHandler = () => {
    dispatch(removeItem(item));
  };

  const completeItemRemoveHandler = () => {
    dispatch(removeItem({ ...item, quantity: 0 }));
  };

  return (
    <div className="flex bg-white border-2 rounded-xl overflow-hidden">
      <Image
        className="basis-1/2 h-52 object-cover"
        src={`/images/${image}`}
        width={200}
        height={100}
        alt={`${title} image`}
      />
      <div className="flex flex-col justify-between py-10 pl-6">
        <div>
          <h3 className="text-3xl">{title}</h3>
          <p className="text-xl mb-5">
            Price: <span className="font-bold">{price}</span> Total price:{" "}
            <span className="font-bold">{totalPrice}</span>
          </p>
        </div>
        <div>
          <button
            className="bg-black text-white p-2 rounded-md mr-2"
            onClick={addItemHandler}
          >
            +
          </button>
          <input
            className="bg-gray-200 rounded-md p-2 font-bold w-12 text-center"
            value={quantity}
            disabled
          />
          <button
            className="bg-black text-white p-2 rounded-md ml-2 disabled:bg-gray-500"
            disabled={quantity === 1}
            onClick={removeItemHandler}
          >
            -
          </button>
          <button
            className="bg-red-300 text-white p-2 rounded-md ml-2"
            onClick={completeItemRemoveHandler}
          >
            &#10060;
          </button>
        </div>
      </div>
    </div>
  );
}
