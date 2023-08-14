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
      <h2>Thank you for your purchase!</h2>
      {orderData !== null ? (
        <div>
          <h4>Here are the details of your order:</h4>
            {orderData.items.map((item) => {
              return (
                <div key={item.id} className="cart-item-container">
                  <p className="detail-cart-text">{item.name}</p>
                  <p className="detail-cart-text">{item.quantity} unit(s)</p>
                  <p className="detail-cart-text">CLP ${item.price}</p>
                  <p className="detail-cart-text">CLP ${item.price * item.quantity}</p>
                </div>
              );
            })}
              <div className="total-item-container">
                <p className="total-cart-text">Shipping Fee:</p>                    
                <p className="detail-cart-text">CLP ${orderData.shipping}</p>
              </div> 
              <div className="total-item-container">                  
                <p className="total-cart-text">Total:</p>                 
                <p className="detail-cart-text">CLP ${orderData.total}</p>  
              </div>  
              <div className="total-item-container">            
                <p className="total-cart-text">Date:</p>                 
                <p className="detail-cart-text">{Date()}</p>
              </div>                 
              <div className="total-item-container">
                <p className="total-cart-text">Order Id:</p>                  
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