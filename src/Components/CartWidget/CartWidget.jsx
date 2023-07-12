import "./CartWidget.css"

function CartWidget(){
    return (
        <div className="cart">
            <p>
                <img className="carticon" src="/assets/carrito.svg" alt="carrito"></img>
                0
            </p>
        </div>  
    )
}
export default CartWidget