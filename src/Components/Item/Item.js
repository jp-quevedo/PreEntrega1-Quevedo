import "./Item.css";

const Item =({id, name, img, price, stock}) => {

    return (
        <article className="card">
            <picture>
                <img src={img} alt={name} className="card-img"/>
            </picture>
            <section>
                <h5>{name}</h5>
                <h6>Precio: ${price}</h6>
                <p>Stock disponible: {stock}</p>
            </section>
            <footer>
                <button className ="btn">Ver Detalle</button>
            </footer>
        </article>
    )
}

export default Item