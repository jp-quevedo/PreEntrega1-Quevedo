import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget"

function NavBar(){
    return (
        <nav>
            <div className="navBar">
            <h1 className="logo">Clever Décor</h1>
            <CartWidget />
            <button className="btn">Candeleros</button>
            <button className="btn">Espejos</button>
            <button className="btn">Marcos</button>
            <button className="btn">Plantas</button>
            <button className="btn">Ver Todo</button>
            </div>
        </nav>  
    )
}
export default NavBar