import React from "react";

const ProductList = ({ products, addToCart, removeFromCart }) => {
  return (
    <div className="h-96 w-1/3 border shadow-md p-4">
      <h1 className="font-bold text-2xl text-center mb-4">Products</h1>
      <ul className="flex flex-col gap-5">
        {products.map((product) => (
          <li
            key={product.id}
            className="h-14 flex justify-between items-center gap-10 border bg-slate-100 p-2 rounded-md"
          >
            <div className="flex flex-col">
              <span className="font-semibold">{product.name}</span>
              <span>${product.price}</span>
            </div>
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                className="w-10 h-10 bg-gray-200 hover:bg-gray-300"
                onClick={() => removeFromCart(product)}
              >
                -
              </button>
              <div className="w-10 h-10 flex items-center justify-center bg-gray-100">
                {product.count || 0}
              </div>
              <button
                className="w-10 h-10 bg-gray-200 hover:bg-gray-300"
                onClick={() => addToCart(product)}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
