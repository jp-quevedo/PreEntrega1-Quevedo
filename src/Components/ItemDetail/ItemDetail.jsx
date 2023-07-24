import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({id, name, price, category, img, stock, description}) => {

    function handleAddToCart(){}

    return(
        <article className="detailcard">
            <picture>
                <img src={img} alt={name} className="detailcard-img"/>
            </picture>
            <section>
                <br/>
                <h5>{name}</h5>
                <h6>Precio: ${price}</h6>
                <h6>Descripción: {description}</h6>
                <h6>Stock: {stock}</h6>
            </section>
            <footer>
                <ItemCount stock={stock} onAddToCart={handleAddToCart} />
                <Link to='/' className="btn">Volver al Inicio</Link>
            </footer>
        </article>
    )
}

export default ItemDetail