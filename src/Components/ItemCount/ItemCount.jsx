import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({stock, onAddToCart}) => {
    const [quantity, setQuantity] = useState(1)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    function handleConfirm(){
        onAddToCart(quantity)
        alert(`Agregaste ${quantity} unidades al carrito`);
    }

    return(
        <div className="counter">
            <div className="selectingbox">
                <button className="selectors" onClick={decrement}>-</button>
                <h3>{quantity}</h3>
                <button className="selectors" onClick={increment}>+</button>
            </div>
            <div>
                <button className="adder" onClick={handleConfirm} disabled={!stock}>
                    <p>Agregar Item</p>
                </button>
            </div>
        </div>
    )
}

export default ItemCount