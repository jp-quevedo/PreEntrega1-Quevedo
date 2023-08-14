import Swal from 'sweetalert2';
import { createContext, useState } from 'react';

export const cartContext = createContext({ cart: [] })

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart([...cart, {...item, quantity}])
        } else {
            const newCart = [...cart];
            const indexUpdate = cart.findIndex((element) => element.id === item.id);
            newCart[indexUpdate].quantity += quantity;
            setCart(newCart);
        }
    }

    const removeItem = (itemId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You're about to remove this item!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'red',
            cancelButtonColor: 'gray',
            confirmButtonText: 'Remove',
            cancelButtonText: 'Cancel',
          }).then((result) => {
            if (result.isConfirmed) {
                const cartUpdated = cart.filter(item => item.id !== itemId)
                setCart(cartUpdated)
                Swal.fire({
                    icon: 'success',
                    title: 'Item Removed!',
                    showConfirmButton: false,
                    timer: 1500,
                })
            }
            else {
                setCart([...cart])
            }
        })
    }

    const clearCart = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You're about to empty your shopping bag!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'red',
            cancelButtonColor: 'gray',
            confirmButtonText: 'Empty Bag',
            cancelButtonText: 'Cancel',
          }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
                Swal.fire({
                    icon: 'success',
                    title: 'Bag Emptied!',
                    showConfirmButton: false,
                    timer: 1500,
                })
            }
            else {
                setCart([...cart])
            }
        })
    }

    const postOrderCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(item => item.id === itemId)
    }

    function getTotalItemsInCart() {
        let total = 0;
        cart.forEach((item) => {
          total += item.quantity;
        });
        return total;
    }
    
    function getTotalPriceInCart() {
        let total = 0;
        cart.forEach((item) => {
          total += item.quantity * item.price;
        });
        return total;
    }

    function getTotalShipping() {
        let total = 0;
        if(getTotalPriceInCart() > 90000) {
            total = 0;
        }
        else {
            total = getTotalPriceInCart() * 0.05;
        }
        return total;
    }

    function orderTotal(){
        let total = getTotalPriceInCart() + getTotalShipping();
        return total;
    }

    function getItemInCart(id) {
        return cart.find((item) => item.id === id);
      }

    return (
        <cartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clearCart,
                isInCart,
                getTotalItemsInCart,
                getTotalPriceInCart,
                getTotalShipping,
                getItemInCart,
                postOrderCart,
                orderTotal
            }}>
            { children }
        </cartContext.Provider>
    )
}
