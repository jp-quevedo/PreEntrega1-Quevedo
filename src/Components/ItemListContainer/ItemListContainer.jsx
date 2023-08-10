import React from 'react';
import { useState, useEffect } from 'react';
import { getItems, getCategoryItem } from '../../Services/Firebase';
import ItemList from '../ItemList/ItemList';
import { useParams, Navigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
import './ItemListContainer.css';
import Swal from 'sweetalert2';

function ItemListContainer({ greeting }){
    const [items , setItems] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const { categoryId } = useParams();
    const [ errorText, setErrorText ] = useState(null);

    useEffect(() => {
        async function requestItems() {
            setIsLoading(true);
            try {
                let response = categoryId
                ? await getCategoryItem(categoryId)
                : await getItems();
                setItems(response);
            } catch(error) {
                setErrorText(error.message)
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No encontramos esa categoría!',
                    showConfirmButton: false,
                    timer: 1500,
                    footer: ''
                    })
            } finally {
                setIsLoading(false);
            }
        }
        requestItems();
    }, [categoryId]);

    if (isLoading) {
        return(
            <Loader />
        );
    }

    if (errorText) {
        return (
            <Navigate to='/' />
        )
    } else {
    return (
        <div className="anuncio">
            <h3>{greeting}</h3>
            <ItemList items={items}/>
        </div>
    )}
}

export default ItemListContainer