import Image from "next/image";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/cartSlice";

export default function Product({ _id, title, image, price }) {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addItem({ _id, title, image, price }));

    alert(`Added ${title} to cart!`);
  };

  return (
    <div className="pb-10 rounded-xl overflow-hidden bg-white">
      <Image
        className="w-full h-60 object-cover"
        src={`/images/${image}`}
        alt={`${title} image`}
        width={340}
        height={250}
      />
      <div className="px-4 pt-4">
        <div className="flex justify-between items-center">
          <h3 className="text-3xl">{title}</h3>
          <p className="text-2xl font-bold">{price}$</p>
        </div>
        <button
          className="text-2xl bg-blue-500 text-white py-2 px-4 float-right rounded-md mt-4"
          onClick={addToCartHandler}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
