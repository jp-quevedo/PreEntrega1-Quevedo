import './ItemCount.css';
import Swal from 'sweetalert2';
import { useState } from 'react';

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
            title: `You added ${quantity} unit(s) to the shopping bag!`,
            showConfirmButton: false,
            timer: 1500
          });
    }

    return(
        <div>
            { (stock === 0)
                ? <h4>We ran out of stock.</h4>
                :   <div className="counter">
                        <div className="selecting-box">
                            <button className="selectors" onClick={decrement}>-</button>
                            <h3>{quantity}</h3>
                            <button className="selectors" onClick={increment}>+</button>
                        </div>
                        <div>
                            <button className="adder" onClick={handleConfirm} disabled={!stock}>
                                <p>Add Item</p>
                            </button>
                        </div>
                    </div>
            }
        </div>

        
    )
}

export default ItemCount
