import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar(){

    const [isShown, setIsShown] = useState(false);

    return(
        <nav>
            <div className="nav-bar">                
                <Link to='/' className="logo" onClick={() => setIsShown(false)}><h1>Clever Décor</h1></Link>
                <CartWidget className="menu-btn" />
                <button className="menu-btn"
                    onClick={() => setIsShown(true)}>
                <img className="nav-bar-icon" src="/assets/menu-hamburguesa.svg" alt="menu"></img>
                </button>
                {isShown && (
                    <div className="menu-items">
                        <Link to='/category/candeleros' className="btn" onClick={() => setIsShown(false)}>Candeleros</Link>
                        <Link to='/category/espejos' className="btn" onClick={() => setIsShown(false)}>Espejos</Link>
                        <Link to='/category/marcos' className="btn" onClick={() => setIsShown(false)}>Marcos</Link>
                        <Link to='/category/plantas' className="btn" onClick={() => setIsShown(false)}>Plantas</Link>
                        <Link to='/' className="btn" onClick={() => setIsShown(false)}>Ver Todo</Link>
                    </div>
                )}
            </div>
        </nav>  
    )
}

export default NavBar