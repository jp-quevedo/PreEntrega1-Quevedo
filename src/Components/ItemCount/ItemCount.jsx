import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

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

    return(
        <div className="counter">
            <div className="selectingbox">
                <button className="selectors" onClick={decrement}>-</button>
                <h5>{quantity}</h5>
                <button className="selectors" onClick={increment}>+</button>
            </div>
            <div>
                <button className="selectors" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount