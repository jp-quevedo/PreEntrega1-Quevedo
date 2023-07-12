import React from "react"
import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

function ItemListContainer({ greeting }){
    console.log("Renderizando items del List Container")
    const [products , setProducts] = useState ([])
    
    /*
    useEffect(() => {
       getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])
    */

    async function requestProducts() {
        const respuesta = await getProducts();
        setProducts(respuesta);
    }
    
    useEffect(() => {
        console.log("Montaje Item List Container")
        requestProducts();
    }, []);

    return (
        <div>
            <h4 className="texto">{greeting}</h4>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer

