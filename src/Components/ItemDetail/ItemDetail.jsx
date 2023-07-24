import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id, name, price, category, img, stock, description,}) => {
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada: ',quantity)} />
            </footer>
        </article>
    )
}

export default ItemDetail