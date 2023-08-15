import "./Checkout.css";
import Swal from 'sweetalert2';
import { cartContext } from '../../Context/CartContext';
import { createOrder } from '../../Services/Firebase';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout() {
    const [buyer, setBuyer] = useState({
        clientname: "",
        email: "",
        adress: "",
    });

    const navigate = useNavigate();

    const { cart, postOrderCart, orderTotal, getTotalShipping } = useContext(cartContext);

    async function handleCheckout(evt) {
        evt.preventDefault();
        const orderData = {
        items: cart,
        buyer: buyer,
        date: new Date(),
        total: orderTotal().toFixed(0),
        shipping: getTotalShipping().toFixed(0),
        };

        try {
            const idOrder = await createOrder(orderData);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Excellent!',
                text: 'Order generated',
                showConfirmButton: false,
                timer: 1500,
            });
            postOrderCart();
            navigate(`/order-confirmation/${idOrder}`);
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: `Something went wrong! ${error.message}`,
                icon: 'warning',
                showCancelButton: false,
                timer: 1500,
            })
    }}

    function onInputChange(evt) {
        const value = evt.target.value;
        const field = evt.target.name;
        const newState = { ...buyer };
        newState[field] = value;
        setBuyer(newState);
    }

    function resetForm(e) {
        e.preventDefault();
        setBuyer({
            clientname: "",
            email: "",
            adress: "",
        });
    }

    return (
        <form className="checkout-container">
            <h2>Complete your information to confirm the purchase:</h2>

            <div className="checkout-div">
                <label htmlFor="clientname" className="checkout-text">Name</label>
                <input className="checkout-imput"
                value={buyer.clientname}
                name="clientname"
                type="text"
                onChange={onInputChange}
                />
            </div>

            <div className="checkout-div">
                <label htmlFor="email" className="checkout-text">Email</label>
                <input className="checkout-imput"
                value={buyer.email}
                name="email"
                type="email"
                onChange={onInputChange}
                />
            </div>

            <div className="checkout-div">
                <label className="checkout-text">Adress</label>
                <input className="checkout-imput"
                value={buyer.adress}
                name="adress"
                type="text"
                onChange={onInputChange}
                />
            </div>

            <button className="confirmation-btn"
                disabled={
                !(buyer.clientname !== "" && buyer.email !== "" && buyer.adress !== "")
                }
                onClick={handleCheckout}
                >
                Generate Order
            </button>
            <button className="confirmation-btn"
                onClick={resetForm}
                >
                Reset Form
            </button>
        </form>
    );
}

export default Checkout;