import './CartDetail.css';
import { cartContext } from '../../Context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartDetail = () => {
    const { cart, removeItem, clearCart, getTotalPriceInCart, getTotalShipping, orderTotal } = useContext(cartContext)

    return (
        <div className="box-container">
            <div>
                <h2>Bolsa de compras</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="table-title">Nombre</th>
                            <th className="table-title">Precio Unitario</th>
                            <th className="table-title">Cantidad Agregada</th>
                            <th className="table-title">Precio Total</th>
                            <th className="table-title">Eliminar</th>
                        </tr>
                    </thead>
                </table>
                <hr/>
            </div>
            <div>
                {cart.map((item) => (
                    <div key={item}>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th><p className="detail-cart-text">{item.name}</p></th>
                                    <th><p className="detail-cart-text">${item.price}</p></th>
                                    <th><p className="detail-cart-text">{item.quantity}</p></th>
                                    <th><p className="detail-cart-text">${item.price * item.quantity}</p></th>
                                    <th><button onClick={() => removeItem(item.id)} className="remove-item">
                                        <img className="remove-icon" src="/assets/basura.svg" alt="eliminar"></img></button>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                        <hr/>
                    </div>
                ))}
                    <table className="table">
                        <tfoot>
                            <tr>
                                <th>
                                    <p className="total-cart-text">Subtotal:</p>
                                </th>
                                <th>
                                    <p className="total-cart-text">${getTotalPriceInCart()}</p>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <p className="total-cart-text">Costo de Envío:</p>
                                </th>
                                <th>
                                    <p className="total-cart-text">${getTotalShipping().toFixed(0)}</p>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <p className="total-cart-text">Total de la Compra:</p>
                                </th>
                                <th>
                                    <p className="total-cart-text">${orderTotal().toFixed(0)}</p>
                                </th>
                            </tr>
                        </tfoot>
                    </table>              
                </div>
            <div>
                <Link to='/checkout' className="checkout-btn">Confirmar Compra</Link>
                <Link to='/' className="checkout-btn">Seguir Comprando</Link>
                <div className="remove-cart"><button onClick={() => clearCart()} className="remove-cart-btn">Vaciar Bolsa</button></div>
            </div>
        </div>
    )
}

export default CartDetail;