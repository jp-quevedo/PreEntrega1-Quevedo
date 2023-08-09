import React from 'react';
import { useState, useEffect } from 'react';
import { getItem } from '../../Services/Firebase';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

function ItemDetailContainer() {
    const [item , setItem] = useState([]);
    const [itemIsLoading , setItemIsLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setItemIsLoading(true);
        async function requestItem(){
            const response = await getItem(itemId);
            setItem(response);
            setItemIsLoading(false);
        }
        requestItem();
    }, [itemId])

    if (itemIsLoading){
        return(
            <Loader />
        )
    }

    return(
        <div>
            <ItemDetail {...item} />
        </div>
    )
}

export default ItemDetailContainer