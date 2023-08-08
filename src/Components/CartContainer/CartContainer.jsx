import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import './CartContainer.css';

function CartContainer() {
    const { cart, removeItem, clearCart } = useContext(cartContext)

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
                        <img className="tabla-icon" src="/assets/basura.svg" alt="eliminar"></img>
                        </button></th>
                        </tr>
                    </table>
                ))}
            </div>
        </div>
    )
}

export default CartContainer;

