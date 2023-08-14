import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, name, img, price}) => {

    return(
        <article className="card">
            <picture>
                <img src={img} alt={name} className="card-img"/>
            </picture>
            <section>
                <p className="card-title">{name}</p>
                <p className="card-text">Price: CLP ${price}</p>
            </section>
            <footer>
                <Link to={`/item/${id}`}>
                    <button className ="detail-btn">Product Detail</button>
                </Link>
            </footer>
        </article>
    )
}

export default Item