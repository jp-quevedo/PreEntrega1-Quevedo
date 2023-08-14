import Loader from '../Loader/Loader';
import { getOrder } from '../../Services/Firebase';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function OrderConfirmation() {
  const [orderData, setOrderData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getOrder(id).then((order) => {
      setOrderData(order);
    });
  }, [id]);

  return (
    <div className="box-container">
      <h2>Gracias por tu compra!</h2>
      {orderData !== null ? (
        <div>
          <h4>Te entregamos los detalles de la orden:</h4>
            {orderData.items.map((item) => {
              return (
                <div key={item.id} className="cart-item-container">
                  <p className="detail-cart-text">{item.name}</p>
                  <p className="detail-cart-text">{item.quantity} unidad(es)</p>
                  <p className="detail-cart-text">${item.price}</p>
                  <p className="detail-cart-text">${item.price * item.quantity}</p>
                </div>
              );
            })}
              <div className="total-item-container">
                <p className="total-cart-text">Costo de Envío:</p>                    
                <p className="detail-cart-text">${orderData.shipping}</p>
              </div> 
              <div className="total-item-container">                  
                <p className="total-cart-text">Monto de la Compra:</p>                 
                <p className="detail-cart-text">${orderData.total}</p>  
              </div>  
              <div className="total-item-container">            
                <p className="total-cart-text">Fecha de la Compra:</p>                 
                <p className="detail-cart-text">{Date()}</p>
              </div>                 
              <div className="total-item-container">
                <p className="total-cart-text">Orden de la Compra:</p>                  
                <p className="detail-cart-text">{orderData.id}</p>
              </div>            
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default OrderConfirmation;