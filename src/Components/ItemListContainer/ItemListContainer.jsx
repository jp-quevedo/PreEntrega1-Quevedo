import React from 'react';
import { useState, useEffect } from 'react';
import { getItems } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';

function ItemListContainer({ greeting }){
    console.log("Renderizando Items del List Container")
    const [items , setItems] = useState ([])
    
    /*
    useEffect(() => {
       getItems()
            .then(response => {
                setItems(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])
    */

    async function requestItems() {
        const response = await getItems();
        setItems(response);
    }
    
    useEffect(() => {
        console.log("Montaje Item List Container")
        requestItems();
    }, []);

    return(
        <div>
            <h4 className="texto">{greeting}</h4>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer