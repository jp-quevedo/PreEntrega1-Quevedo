import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';

const CartContainer = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(cartContext)

    if(totalQuantity === 0){
        return(
            <div>
                <h1>No has agregado productos al carrito</h1>
                <Link to='/' className="btn">Volver al Inicio</Link>
            </div>
        )
    }

    return(
        <div>
            { cart.map(p => <Item key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <Link to='/checkout' className="btn">Confirmar Compra</Link>
            <button onClick={() => clearCart()} className="btn">Vaciar Carrito</button>
        </div>
    )
}

export default CartContainer;