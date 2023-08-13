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
                <h2>Bolsa de Compras</h2>
                <p className="empty-cart-text">No hay items en la Bolsa</p>
                <Link to='/' className="detail-btn">Ir a Comprar</Link>
            </div>
        )
    }

    return (
        <CartDetail />
    )
}

export default CartContainer;

