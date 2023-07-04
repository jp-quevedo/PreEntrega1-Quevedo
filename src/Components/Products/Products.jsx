import "./Products.css";

function Products(props){
    const {img, title, price} = props;
    return (
        <div className="container">
            <div className="card">
                <img className="card-img" alt="product" src={img}/>
                <h6>{title}</h6>
                <h6>$ {price}</h6>
                <button className="btn">Ver Detalle</button>
            </div>
        </div>
    )
}
export default Products