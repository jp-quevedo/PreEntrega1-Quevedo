import Item from "../Item/Item";
import "./ItemList";

const ItemList = ({products }) => {
    return(
        <div className="container">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList