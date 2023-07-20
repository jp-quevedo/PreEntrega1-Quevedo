import React from 'react';
import { useState, useEffect } from 'react';
import { getItems, getCategoryItem } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer({ greeting }){
    console.log("Renderizando Items del List Container");
    const [items , setItems] = useState ([]);

    const { categoryId } = useParams();
    
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

        /*
        let response = [];
        if (categoryId === undefined) {
            response = await getItems();
        }
        else {
            response = await getItems(categoryId);
        }
        */

        let response = categoryId? await getCategoryItem(categoryId) : await getItems();
        setItems(response);
    }
    
    useEffect(() => {
        console.log("Montaje Item List Container");
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