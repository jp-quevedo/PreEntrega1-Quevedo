import Item from '../Item/Item';
import './ItemList';

const ItemList = ({items }) => {
    return(
        <div className="container">
            {items.map(item => <Item key={item.id} {...item} />)}
        </div>
    )
}

export default ItemList