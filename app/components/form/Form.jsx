import { forwardRef } from "react";

export default forwardRef(function Form(_, ref) {
  return (
    <form
      ref={ref}
      className="flex flex-col gap-5 border-2 border-black rounded-md p-5"
    >
      <label className="flex gap-2 justify-between items-center">
        Name:
        <input
          name="name"
          className="p-2 rounded-md"
          type="text"
          placeholder="Write your name"
        />
      </label>
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
          placeholder="Write your phone"
        />
      </label>
      <label className="flex gap-2 justify-between items-center">
        Address:
        <input
          name="address"
          className="p-2 rounded-md"
          type="text"
          placeholder="Write your address"
        />
      </label>
    </form>
  );
});
