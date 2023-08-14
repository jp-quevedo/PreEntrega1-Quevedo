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
            </div>
            <div>
                {cart.map((item) => (
                    <div key={item.id} className="cart-item-container">
                        <p className="detail-cart-text">{item.name}</p>
                        <p className="detail-cart-text">{item.quantity} unidad(es)</p>
                        <p className="detail-cart-text">${item.price}</p>
                        <p className="detail-cart-text">${item.price * item.quantity}</p>
                        <div className="remove-item-container">
                            <button className="remove-item"
                                onClick={() => removeItem(item.id)}>
                                <img className="remove-icon" src="/assets/basura.svg" alt="eliminar"></img>
                            </button>
                        </div> 
                    </div>

                ))}
                    <div className="total-item-container">
                        <p className="total-cart-text">Subtotal:</p>                               
                        <p className="detail-cart-text">${getTotalPriceInCart()}</p>
                    </div>              
                    <div className="total-item-container">
                        <p className="total-cart-text">Costo de Envío:</p>                               
                        <p className="detail-cart-text">${getTotalShipping().toFixed(0)}</p>
                    </div>              
                    <div className="total-item-container">
                        <p className="total-cart-text">Total de la Compra:</p>                                
                        <p className="detail-cart-text">${orderTotal().toFixed(0)}</p>
                    </div>              
                </div>
            <div className="checkout-options">
                <Link to='/checkout' className="checkout-btn">Confirmar Compra</Link>
                <Link to='/' className="checkout-btn">Seguir Comprando</Link>
                <div className="remove-cart"><button onClick={() => clearCart()} className="remove-cart-btn">Vaciar Bolsa</button></div>
            </div>
        </div>
    )
}

export default CartDetail;