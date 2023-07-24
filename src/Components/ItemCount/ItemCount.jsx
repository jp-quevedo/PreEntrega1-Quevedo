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
    }

    return(
        <div className="counter">
            <div className="selectingbox">
                <button className="selectors" onClick={decrement}>-</button>
                <h5>{quantity}</h5>
                <button className="selectors" onClick={increment}>+</button>
            </div>
            <div>
                <button className="selectors" onClick={handleConfirm} disabled={!stock}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount