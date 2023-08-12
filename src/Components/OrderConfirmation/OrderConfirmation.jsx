import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOrder } from '../../Services/Firebase';
import Loader from '../Loader/Loader';
import "./OrderConfirmation.css"

function OrderConfirmation() {
  const [orderData, setOrderData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getOrder(id).then((order) => {
      setOrderData(order);
    });
  }, [id]);

  return (
    <div className="order-container">
      <h2>Gracias por tu compra!</h2>
      {orderData !== null ? (
        <div>
          <h4>Te entregamos los detalles de la orden:</h4>
            <table className="order-box">
              <thead>
                <tr>
                  <th className="tabla">Nombre</th>
                  <th className="tabla">Precio Unitario</th>
                  <th className="tabla">Cantidad Agregada</th>
                  <th className="tabla">Precio Total</th>
                </tr>
              </thead>
            </table>
            {orderData.items.map((item) => {
              return (
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <th className="tabla"><p className="detailcart-text">{item.name}</p></th>
                        <th className="tabla"><p className="detailcart-text">${item.price}</p></th>
                        <th className="tabla"><p className="detailcart-text">{item.quantity}</p></th>
                        <th className="tabla"><p className="detailcart-text">${item.price * item.quantity}</p></th>
                      </tr>
                    </tbody>
                  </table>
                  <hr/>
                </div>
              );
            })}
            <table className="tabla">
              <tfoot> 
                <tr>
                  <th>
                    <p className="totalcart-text">Costo de Envío:</p>
                    </th>
                    <th>
                    <p className="totalcart-text">${orderData.shipping}</p>
                  </th>
                </tr>           
                <tr>
                  <th>
                    <p className="totalcart-text">Monto de la Compra:</p>
                  </th>
                  <th>
                    <p className="totalcart-text">${orderData.total}</p>
                  </th>
                </tr>
                <tr>
                  <th>
                    <p className="totalcart-text">Fecha de la Compra:</p>
                  </th>
                  <th>
                    <p className="totalcart-text">{Date()}</p>
                  </th>
                </tr>
                <tr>
                  <th>
                    <p className="totalcart-text">Orden de la Compra:</p>
                  </th>
                  <th>
                    <p className="totalcart-text">{orderData.id}</p>
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