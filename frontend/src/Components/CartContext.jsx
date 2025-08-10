import React, { createContext, useContext, useState, useEffect } from "react";
import { AppContent } from "../context/AppContext";
import axios from "axios";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { userData, backendUrl } = useContext(AppContent);
  const [cartItems, setCartItems] = useState([]);

  // Load cart from DB after login
  useEffect(() => {
    if (userData) {
      axios
        .get(`${backendUrl}/api/user/data`, { withCredentials: true })
        .then((res) => {
          if (res.data.success) {
            setCartItems(res.data.cart || []);
          }
        })
        .catch((err) => console.error("❌ Error loading cart:", err));
    }
  }, [userData]);

  // Save cart to DB
  const saveCart = (newCart) => {
    setCartItems(newCart);
    if (userData) {
      axios
        .post(
          `${backendUrl}/api/user/cart`,
          { cart: newCart },
          { withCredentials: true }
        )
        .catch((err) => console.error("❌ Error saving cart:", err));
    }
  };

  const addToCart = (item) => {
    if (!cartItems.some((i) => i.id === item.id)) {
      saveCart([...cartItems, item]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    saveCart(cartItems.filter((item) => item.id !== itemToRemove.id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
