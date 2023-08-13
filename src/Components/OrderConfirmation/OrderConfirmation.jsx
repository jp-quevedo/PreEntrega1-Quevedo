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
            <table className="table">
              <thead>
                <tr>
                  <th className="table-title">Nombre</th>
                  <th className="table-title">Precio Unitario</th>
                  <th className="table-title">Cantidad Agregada</th>
                  <th className="table-title">Precio Total</th>
                </tr>
              </thead>
            </table>
            {orderData.items.map((item) => {
              return (
                <div>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th><p className="detail-cart-text">{item.name}</p></th>
                        <th><p className="detail-cart-text">${item.price}</p></th>
                        <th><p className="detail-cart-text">{item.quantity}</p></th>
                        <th><p className="detail-cart-text">${item.price * item.quantity}</p></th>
                      </tr>
                    </tbody>
                  </table>
                  <hr/>
                </div>
              );
            })}
            <table className="table">
              <tfoot> 
                <tr>
                  <th>
                    <p className="total-cart-text">Costo de Envío:</p>
                    </th>
                    <th>
                    <p className="total-cart-text">${orderData.shipping}</p>
                  </th>
                </tr>           
                <tr>
                  <th>
                    <p className="total-cart-text">Monto de la Compra:</p>
                  </th>
                  <th>
                    <p className="total-cart-text">${orderData.total}</p>
                  </th>
                </tr>
                <tr>
                  <th>
                    <p className="total-cart-text">Fecha de la Compra:</p>
                  </th>
                  <th>
                    <p className="total-cart-text">{Date()}</p>
                  </th>
                </tr>
                <tr>
                  <th>
                    <p className="total-cart-text">Orden de la Compra:</p>
                  </th>
                  <th>
                    <p className="total-cart-text">{orderData.id}</p>
                  </th>
                </tr>
              </tfoot>
            </table>            
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default OrderConfirmation;