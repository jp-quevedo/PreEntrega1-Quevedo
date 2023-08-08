import { useState } from 'react';
import './ItemCount.css';
import Swal from 'sweetalert2';

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
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Agregaste ${quantity} unidad(es) al carrito`,
            showConfirmButton: false,
            timer: 1500
          });
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