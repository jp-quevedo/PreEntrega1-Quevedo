import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import './CartContainer.css';
import CartDetail from '../CartDetail/CartDetail';

const CartContainer = () => {
    const { getTotalItemsInCart } = useContext(cartContext)

    if(getTotalItemsInCart() === 0) {
        return (
            <div className="cart-vacio">
                <h2>Bolsa de Compras</h2>
                <p className="cartvacio-text">No hay items en la Bolsa</p>
                <Link to='/' className="detail-btn">Seguir Comprando</Link>
            </div>
        )
    }

    return (
        <CartDetail />
    )
}

export default CartContainer;

