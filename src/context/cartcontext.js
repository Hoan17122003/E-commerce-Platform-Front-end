// src/context/CartContext.js
import React, { createContext, useState, useContext } from 'react';

// Khởi tạo Context
export const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeItemFromCart = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook để sử dụng CartContext
export const useCart = () => {
    return useContext(CartContext);
};

export default CartProvider