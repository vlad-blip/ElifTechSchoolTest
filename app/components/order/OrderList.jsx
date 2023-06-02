import OrderItem from "./OrderItem";

export default function OrderList({ list, className = "" }) {
  return (
    <ul className={`grid grid-cols-2 gap-5 ${className}`}>
      {list.map((order) => (
        <li key={order._id}>
          <OrderItem {...order} />
        </li>
      ))}
    </ul>
  );
}
