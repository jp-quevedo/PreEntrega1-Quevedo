import './CartDetail.css';
import { cartContext } from '../../Context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartDetail = () => {
    const { cart, removeItem, clearCart, getTotalPriceInCart, getTotalShipping, orderTotal, addInCart, subtractInCart } = useContext(cartContext)


    return (
        <div className="box-container">
            <div>
                <h2>Shopping Bag</h2>
            </div>
            <div>
                {cart.map((item) => (
                    <div key={item.id} className="cart-item-container">
                        <p className="detail-cart-text">{item.name}</p>
                        <p className="detail-cart-text">
                            <button className="incart-selectors" onClick={() => subtractInCart(item.id)}>-</button>
                            {item.quantity} unit(s)
                            <button className="incart-selectors" onClick={() => addInCart(item.id)}>+</button>
                        </p>
                        <p className="detail-cart-text">CLP ${item.price}</p>
                        <p className="detail-cart-text">CLP ${item.price * item.quantity}</p>
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
                        <p className="detail-cart-text">CLP ${getTotalPriceInCart()}</p>
                    </div>              
                    <div className="total-item-container">
                        <p className="total-cart-text">Shipping Fee:</p>                               
                        <p className="detail-cart-text">CLP ${getTotalShipping().toFixed(0)}</p>
                    </div>              
                    <div className="total-item-container">
                        <p className="total-cart-text">Total:</p>                                
                        <p className="detail-cart-text">CLP ${orderTotal().toFixed(0)}</p>
                    </div>              
                </div>
            <div className="checkout-options">
                <Link to='/checkout' className="checkout-btn">Confirm Purchase</Link>
                <Link to='/' className="checkout-btn">Continue Shopping</Link>
                <div className="remove-cart"><button onClick={() => clearCart()} className="remove-cart-btn">Empty Bag</button></div>
            </div>
        </div>
    )
}

export default CartDetail;