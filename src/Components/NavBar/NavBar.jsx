import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget"

function NavBar(){
    return (
        <nav>
            <h1 className="logo">Clever Décor</h1>
            <CartWidget />
            <br />
            <br />
            <br />
            <button className="btn">CANDELEROS</button>
            <button className="btn">ESPEJOS</button>
            <button className="btn">MARCOS</button>
            <button className="btn">PLANTAS</button>
        </nav>  
    )
}
export default NavBar