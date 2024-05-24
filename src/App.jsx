import { useState } from "react";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";

const initialData = [
  { id: 1, name: "product-1", price: 500 },
  { id: 2, name: "product-2", price: 500 },
  { id: 3, name: "product-3", price: 500 },
];

const App = () => {
  const [products] = useState(initialData);
  const [cart, setCart] = useState([]);

  const addToCart = (productToAdd) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === productToAdd.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === productToAdd.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCart, { ...productToAdd, count: 1 }];
      }
    });
  };

  const removeFromCart = (productToRemove) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === productToRemove.id);
      if (existingProduct && existingProduct.count > 1) {
        return prevCart.map(item =>
          item.id === productToRemove.id ? { ...item, count: item.count - 1 } : item
        );
      } else {
        return prevCart.filter(item => item.id !== productToRemove.id);
      }
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  };

  return (
    <div className="flex justify-center gap-10 m-7">
      <ProductList products={products} addToCart={addToCart} removeFromCart={removeFromCart} />
      <Cart cartItems={cart} total={calculateTotal()} addToCart={addToCart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
