import "./Products.css";

function Products(props){
    const {img, title, price} = props;
    return (
        <div className="container">
            <div className="card">
                <img className="card-img" alt="product" src={img}/>
                <p>{title}</p>
                <p>$ {price}</p>
                <button className="btn">Ver Detalle</button>
            </div>
        </div>
    )
}
export default Products