// src/components/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cartItems, removeItemFromCart } = useCart();

    return (
        <div className="cart">
            <h2>Giỏ hàng của bạn</h2>
            {cartItems.length === 0 ? (
                <p>Giỏ hàng trống</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <div className="details">
                                <p>{item.name}</p>
                                <p>Giá: {item.price}</p>
                                <button onClick={() => removeItemFromCart(item.id)}>Xóa</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
