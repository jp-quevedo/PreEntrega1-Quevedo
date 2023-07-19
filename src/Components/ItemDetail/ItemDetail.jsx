import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id, name, price, category, img, stock, description,}) => {
    return(
        <article className="detailcard">
            <picture>
                <img src={img} alt={name} className="detailcard-img"/>
            </picture>
            <section>
                <br/>
                <h3>{name}</h3>
                <h4>Precio: ${price}</h4>
                <h4>Descripción: {description}</h4>
                <h4>Stock: {stock}</h4>
            </section>
            <footer>
                <ItemCount initial={1} stock={16} onAdd={(quantity) => console.log('Cantidad agregada: ',quantity)} />
            </footer>
        </article>
    )
}

export default ItemDetail