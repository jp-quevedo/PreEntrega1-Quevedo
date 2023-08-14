import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <nav>
            <div className="nav-bar">                
                <Link to='/' className="logo"><h1>Clever Décor</h1></Link>
                <Link to='/category/candeleros' className="btn">Candeleros</Link>
                <Link to='/category/espejos' className="btn">Espejos</Link>
                <Link to='/category/marcos' className="btn">Marcos</Link>
                <Link to='/category/plantas' className="btn">Plantas</Link>
                <Link to='/' className="btn">Ver Todo</Link>
                <CartWidget className="btn" />
            </div>
        </nav>  
    )
}

export default NavBar