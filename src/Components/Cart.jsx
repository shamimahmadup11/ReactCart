import React from "react";

const Cart = ({ cartItems, total, addToCart, removeFromCart }) => {
  return (
    <div className="h-96 w-1/3 border shadow-md p-4">
      <h1 className="font-bold text-2xl text-center mb-4">Cart</h1>
      <ul className="flex flex-col gap-5">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="h-14 flex justify-between items-center gap-10 border bg-slate-100 p-2 rounded-md"
          >
            <div className="flex flex-col">
              <span className="font-semibold">{item.name}</span>
              <span>${item.price} x {item.count}</span>
            </div>
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                className="w-10 h-10 bg-gray-200 hover:bg-gray-300"
                onClick={() => removeFromCart(item)}
              >
                -
              </button>
              <div className="w-10 h-10 flex items-center justify-center bg-gray-100">
                {item.count}
              </div>
              <button
                className="w-10 h-10 bg-gray-200 hover:bg-gray-300"
                onClick={() => addToCart(item)}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-right">
        <span className="font-bold">Total: ${total}</span>
      </div>
    </div>
  );
};

export default Cart;
