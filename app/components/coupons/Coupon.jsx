export default function Coupon({ description, code }) {
  const copyHandler = async () => {
    await navigator.clipboard.writeText(code);
    alert("Coupon copied!");
  };
  return (
    <div className="bg-white p-10 rounded-xl">
      <p className="text-4xl">{description}</p>
      <div className="flex items-center justify-between mt-10">
        <p className="text-2xl">{code}</p>
        <button
          className="bg-blue-500 text-white py-2 px-5 rounded-xl"
          onClick={copyHandler}
        >
          Copy
        </button>
      </div>
    </div>
  );
}
