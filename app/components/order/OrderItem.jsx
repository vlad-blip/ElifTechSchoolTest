import Image from "next/image";

export default function OrderItem({
  title,
  image,
  price,
  totalPrice,
  quantity,
}) {
  return (
    <div className="bg-white rounded-xl overflow-hidden flex items-center gap-10">
      <Image
        className="h-28 object-cover"
        src={`/images/${image}`}
        width={200}
        height={100}
        alt={`${title} image`}
      />
      <div>
        <h3 className="text-4xl mb-2">{title}</h3>
        <p className="text-xl">
          Price: {price}x{quantity} Total Price: {totalPrice}
        </p>
      </div>
    </div>
  );
}
