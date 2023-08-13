import Item from '../Item/Item';

const ItemList = ({items }) => {
    return(
        <div className="app-container">
            {items.map(item => <Item key={item.id} {...item} />)}
        </div>
    )
}

export default ItemList