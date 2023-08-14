import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { cartContext } from '../../Context/CartContext';

const ItemDetail = ({id, name, price, img, stock, description}) => {

    const [quantityAdded, setQuantityAdded] = useState(0)
    const [isAddedToCart , setIsAddedToCart] = useState(false);
    const { addItem, getItemInCart } = useContext(cartContext)

    const handleAddToCart = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
        setIsAddedToCart(true);
    }

    const itemInCart = getItemInCart(id);
    const maxItems = itemInCart ? stock - itemInCart.quantity : stock;

    const stockStyle = {
        color: maxItems>=5? "green" : "red"
    }

    return(
        <article className="detail-card">
            <picture>
                <img src={img} alt={name} className="detail-card-img"/>
            </picture>
            <section>
                <p className="detail-card-title">{name}</p>
                <p className="detail-card-text">Price: CLP ${price}</p>
                <p className="detail-card-text">Description: {description}</p>
                <p className="detail-card-text" style={stockStyle}>Stock: {maxItems}</p>
            </section>
            <footer>
                {
                    isAddedToCart
                    ? <Link to='/cart' className="detail-btn">Go to the Shopping Bag</Link>
                    : <ItemCount stock={maxItems} onAddToCart={handleAddToCart} />
                }
                <Link to='/' className="detail-btn">Continue Shopping</Link>
            </footer>
        </article>
    )
}

export default ItemDetail