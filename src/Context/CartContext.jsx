import { createContext, useState } from 'react';
import Swal from 'sweetalert2';

export const cartContext = createContext({ cart: [] })

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        setCart([...cart, {...item, quantity}])
    }

    const removeItem = (itemId) => {
        Swal.fire({
            title: 'Estás seguro?',
            text: "No podrás revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'red',
            cancelButtonColor: 'gray',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
          }).then((result) => {
            if (result.isConfirmed) {
                const cartUpdated = cart.filter(item => item.id !== itemId)
                setCart(cartUpdated)
                Swal.fire({
                    icon: 'success',
                    title: 'Eliminado!',
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
            title: 'Estás seguro?',
            text: "No podrás revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'red',
            cancelButtonColor: 'gray',
            confirmButtonText: 'Vaciar Bolsa',
            cancelButtonText: 'Cancelar',
          }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
                Swal.fire({
                    icon: 'success',
                    title: 'Bolsa Vaciada!',
                    showConfirmButton: false,
                    timer: 1500,
                })
            }
            else {
                setCart([...cart])
            }
        })
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
