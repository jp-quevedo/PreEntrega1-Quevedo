import './CartContainer.css';
import CartDetail from '../CartDetail/CartDetail';
import { cartContext } from '../../Context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartContainer = () => {
    const { getTotalItemsInCart } = useContext(cartContext)

    if(getTotalItemsInCart() === 0) {
        return (
            <div className="empty-cart">
                <h2>Shopping Bag</h2>
                <p className="empty-cart-text">Your shopping bag is empty!</p>
                <Link to='/' className="detail-btn">Go Shopping</Link>
            </div>
        )
    }

    return (
        <CartDetail />
    )
}

export default CartContainer;

