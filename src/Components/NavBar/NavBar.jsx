import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
        <nav>
            <img src="/assets/logo.png" alt="logo"></img>
            <button>Cocina</button>
            <button>Dormitorio</button>
            <button>Living</button>
            <CartWidget />
        </nav>  
    )
}
export default NavBar