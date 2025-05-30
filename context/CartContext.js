import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  
 const addToCart = (product) => {
  setCartItems((prevCart) => {
    const existingItem = prevCart.find(item => item.id === product.id);

    if (existingItem && existingItem.quantity < product.stock) {
      return prevCart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else if (!existingItem) {
      return [...prevCart, { ...product, quantity: 1 }];
    }

    return prevCart;
  });
  setProducts((prevProducts) => {
    return prevProducts.map(item =>
      item.id === product.id && item.stock > 0 
        ? { ...item, stock: item.stock - 1 }
        : item
    );
  });
};


const removeFromCart = (productId) => {
  setCartItems((prevCart) => {
    return prevCart.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0);
  });
};

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);