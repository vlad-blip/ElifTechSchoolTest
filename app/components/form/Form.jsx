import { forwardRef } from "react";

export default forwardRef(function Form({ className = "" }, ref) {
  return (
    <form
      ref={ref}
      className={`flex flex-col gap-5 border-2 border-black rounded-md p-5 ${className}`}
    >
      <label className="flex gap-2 justify-between items-center">
        Name:
        <input
          name="name"
          className="p-2 rounded-md"
          type="text"
          placeholder="Write your name"
          required
        />
      </label>
      <label className="flex gap-2 justify-between items-center">
        Email:
        <input
          name="email"
          className="p-2 rounded-md"
          type="email"
          placeholder="Write your email"
          required
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
          required
        />
      </label>
      <label className="flex gap-2 justify-between items-center">
        Address:
        <input
          name="address"
          className="p-2 rounded-md"
          type="text"
          placeholder="Write your address"
          required
        />
      </label>
    </form>
  );
});
