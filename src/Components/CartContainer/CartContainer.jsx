import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import './CartContainer.css';

const CartContainer = () => {
    const { cart, removeItem, clearCart, getTotalItemsInCart, getTotalPriceInCart } = useContext(cartContext)

    if(getTotalItemsInCart === '0') {
        return (
            <div>
                <h2>No hay items en la bolsa</h2>
                <Link to='/' className="detail-btn">Seguir Comprando</Link>
            </div>
        )
    }

    return (
        <div className="cart-container">
            <div>
                <h2>Bolsa de Compras</h2>
                <table>
                    <tr>
                        <th className="tabla">Nombre</th>
                        <th className="tabla">Precio Unitario</th>
                        <th className="tabla">Cantidad Agregada</th>
                        <th className="tabla">Precio Total</th>
                        <th className="tabla">Eliminar</th>
                    </tr>
                </table>
            </div>
            <div>
                {cart.map((item) => (
                    <table>
                        <tr>
                            <th className="tabla"><p className="detailcart-text">{item.name}</p></th>
                            <th className="tabla"><p className="detailcart-text">${item.price}</p></th>
                            <th className="tabla"><p className="detailcart-text">{item.quantity}</p></th>
                            <th className="tabla"><p className="detailcart-text">${item.price * item.quantity}</p></th>
                            <th className="tabla"><button onClick={() => removeItem(item.id)} className="eliminar">
                                <img className="tabla-icon" src="/assets/basura.svg" alt="eliminar"></img></button>
                            </th>
                        </tr>
                    </table>
                ))}
                <div className="eliminar-bolsa"><button onClick={() => clearCart()} className="eliminar-bolsa-btn">Vaciar Bolsa</button></div>
                <table>
                    <tr className="tabla">Subtotal: ${getTotalPriceInCart}</tr>
                    <tr className="tabla">Costo de Envío: ${getTotalPriceInCart * 0.05}</tr>
                    <tr className="tabla">Total de la Compra: ${}</tr>
                </table>
            </div>
        </div>
    )
}

export default CartContainer;

