import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    const itemCount = context.cart.reduce((total, item) => total + item.quantity, 0);
    return {
        ...context,
        itemCount
    };
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const updateLocalStorage = (newCart) => {
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    const addItem = (product, quantity) => {
        const itemIndex = cart.findIndex(item => item.id === product.id);

        if (itemIndex === -1) {
            const newCart = [...cart, { ...product, quantity }];
            setCart(newCart);
            updateLocalStorage(newCart);
        } else {
            const newCart = [...cart];
            newCart[itemIndex].quantity += quantity;
            setCart(newCart);
            updateLocalStorage(newCart);
        }
    };

    const removeItem = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
        updateLocalStorage(newCart);
    };

    const updateItemQuantity = (id, quantity) => {
        const itemIndex = cart.findIndex(item => item.id === id);

        if (itemIndex !== -1) {
            const newCart = [...cart];
            newCart[itemIndex].quantity = quantity;
            setCart(newCart);
            updateLocalStorage(newCart);
        }
    };

    const clearCart = () => {
        setCart([]);
        updateLocalStorage([]);
    };

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const value = {
        cart,
        addItem,
        removeItem,
        updateItemQuantity, 
        clearCart,
        getTotalItems,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

