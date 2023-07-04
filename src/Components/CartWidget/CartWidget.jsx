import "./CartWidget.css"

function CartWidget(){
    return (
        <nav className="cart">
            <img className="carticon" src="/assets/carrito.svg" alt="carrito"></img>
            <p> 0</p>
        </nav>  
    )
}
export default CartWidget