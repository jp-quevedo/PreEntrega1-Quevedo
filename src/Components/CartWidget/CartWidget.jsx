import './CartWidget.css';
import { cartContext } from '../../Context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const countContext = useContext(cartContext)

    return(
        <Link to='/cart' className="btn">
            <div className="cart">
                    <img className="nav-bar-icon" src="/assets/bolsa-de-la-compra.svg" alt="carrito"></img>
                    <p style={{ display:
                        countContext.getTotalItemsInCart() > 0
                            ? 'block'
                            : 'none' }}>
                        {countContext.getTotalItemsInCart()}
                    </p>
            </div>
        </Link> 
    )
}

export default CartWidget