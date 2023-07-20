import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, name, img, price, stock}) => {

    return(
        <article className="card">
            <picture>
                <img src={img} alt={name} className="card-img"/>
            </picture>
            <section>
                <br/>
                <h5>{name}</h5>
                <h6>Precio: ${price}</h6>
            </section>
            <footer>
                <Link to={`/item/${id}`}>
                    <button className ="btn">Ver Detalle</button>
                </Link>
            </footer>
        </article>
    )
}

export default Item