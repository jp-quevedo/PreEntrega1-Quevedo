import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { cartContext } from '../../Context/CartContext';

const ItemDetail = ({id, name, price, category, img, stock, description}) => {

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
        <article className="detailcard">
            <picture>
                <img src={img} alt={name} className="detailcard-img"/>
            </picture>
            <section>
                <p className="detailcard-title">{name}</p>
                <p className="detailcard-text">Precio: ${price}</p>
                <p className="detailcard-text">Descripción: {description}</p>
                <p className="detailcard-text" style={stockStyle}>Stock: {maxItems}</p>
            </section>
            <footer>
                {
                    isAddedToCart
                    ? <Link to='/cart' className="detail-btn">Ir al Carrito</Link>
                    : <ItemCount stock={maxItems} onAddToCart={handleAddToCart} />
                }
                <Link to='/' className="detail-btn">Seguir Comprando</Link>
            </footer>
        </article>
    )
}

export default ItemDetail