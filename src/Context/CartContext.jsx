import { createContext, useState } from 'react';

export const cartContext = createContext({ cart: [] })

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        setCart([...cart, {...item, quantity}])
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(item => item.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(item => item.id === itemId)
    }

    function getTotalItemsInCart() {
        let total = 0;
        cart.forEach((item) => {
          total ++;
        });
        return total;
    }
    
    function getTotalPriceInCart() {
        let total = 0;
        cart.forEach((item) => {
          total += item.count * item.price;
        });
        return total;
    }

    return (
        <cartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart, getTotalItemsInCart, getTotalPriceInCart }}>
            { children }
        </cartContext.Provider>
    )
}
