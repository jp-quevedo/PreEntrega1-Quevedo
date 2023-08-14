import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar(){

    const [isShown, setIsShown] = useState(false);

    return (
        <nav>
            <div className="nav-bar">                
                <Link to='/' className="logo" onClick={() => setIsShown(false)}><h1>Clever Décor</h1></Link>
                <Link to='/about' className="about-btn" onClick={() => setIsShown(false)}>
                <img className="nav-bar-icon" src="/assets/comentario-alt.svg" alt="about"></img>
                </Link>
                <CartWidget className="menu-btn"/>
                <button className="menu-btn"
                    onClick={() => setIsShown(true)}>
                <img className="nav-bar-icon" src="/assets/menu-hamburguesa.svg" alt="menu"></img>
                </button>
                {isShown && (
                    <div className="menu-items">
                        <Link to='/category/lanterns' className="menu-btn" onClick={() => setIsShown(false)}>Lanterns</Link>
                        <Link to='/category/mirrors' className="menu-btn" onClick={() => setIsShown(false)}>Mirrors</Link>
                        <Link to='/category/frames' className="menu-btn" onClick={() => setIsShown(false)}>Frames</Link>
                        <Link to='/category/plants' className="menu-btn" onClick={() => setIsShown(false)}>Plants</Link>
                        <Link to='/' className="menu-btn" onClick={() => setIsShown(false)}>View All</Link>
                        <button className="menu-btn" onClick={() => setIsShown(false)}><img className="nav-bar-close-icon" src="/assets/cruz.svg" alt="cerrar"></img></button>
                    </div>
                )}
            </div>
        </nav>  
    )
}

export default NavBar