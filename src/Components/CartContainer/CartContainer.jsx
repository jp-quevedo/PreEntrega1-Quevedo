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
                    <div key={item}>
                        {console.log(item.id)}
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
                    </div>
                ))}
                <table>
                    <tr>
                        <th className="tabla"><p className="totalcart-text">Subtotal: ${getTotalPriceInCart()}</p></th>
                    </tr>
                    <tr>
                        <th className="tabla"><p className="totalcart-text">Costo de Envío: ${getTotalPriceInCart() * 0.05}</p></th>
                    </tr>
                    <tr>
                        <th className="tabla"><p className="totalcart-text">Total de la Compra: ${getTotalPriceInCart() + getTotalPriceInCart() * 0.05}</p></th>
                    </tr>
                </table>
            </div>
            <div>
                <Link to='/' className="checkout-btn">Pagar Compra</Link>
                <Link to='/' className="checkout-btn">Seguir Comprando</Link>
                <div className="eliminar-bolsa"><button onClick={() => clearCart()} className="eliminar-bolsa-btn">Vaciar Bolsa</button></div>
            </div>
        </div>
    )
}

export default CartContainer;

