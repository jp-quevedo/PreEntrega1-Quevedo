import React from 'react';
import { useState, useEffect } from 'react';
import { getItems, getCategoryItem } from '../../Services/Firebase';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import './ItemListContainer.css';

function ItemListContainer({ greeting }){
    const [items , setItems] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setIsLoading(true);
        async function requestItems() {
            let response = categoryId
                ? await getCategoryItem(categoryId)
                : await getItems();
            setItems(response);
            setIsLoading(false);
        }
        requestItems();
    }, [categoryId]);

    if (isLoading) {
        return(
            <Loader />
        );
    }

    return(
        <div className="anuncio">
            <h3>{greeting}</h3>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer