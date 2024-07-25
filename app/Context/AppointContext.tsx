"use client";

import React, { createContext, useState, useContext } from "react";
import Data from "@/public/Data/Data";

const getDefaultCart = () => {
  let cart = {};

  for (let index = 0; index < Data.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

export const AppointContext = createContext(null);

export function AppWrapper({ children }) {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const [count, setCount] = useState(0);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    setCount(count + 1);
  };

  return (
    <AppointContext.Provider
      value={{
        addToCart,
        cartItems,
        Data,
        count,
      }}
    >
      {children}
    </AppointContext.Provider>
  );

  function useAppointContext() {
    return useContext(AppointContext);
  }
}
