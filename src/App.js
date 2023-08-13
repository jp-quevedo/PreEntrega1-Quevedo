import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './Components/CartContainer/CartContainer';
import Checkout from './Components/Checkout/Checkout';
import OrderConfirmation from './Components/OrderConfirmation/OrderConfirmation';
import { CartProvider } from './Context/CartContext';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return(
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <header className="app-header">
            <NavBar />
          </header>
          <main className="app-container">
            <Routes>
              <Route path='/' element={ <ItemListContainer greeting={`Envíos gratis por compras sobre $90.000!`} /> }/>
              <Route path='/category/:categoryId' element={ <ItemListContainer /> }/>
              <Route path='/item/:itemId' element={ <ItemDetailContainer /> }/>
              <Route path='/cart' element={ <CartContainer /> }/>
              <Route path='/checkout' element={ <Checkout /> }/>
              <Route path='/order-confirmation/:id' element={ <OrderConfirmation /> }/>
              <Route path='*' element={ <h1>Error: página no encontrada.</h1> } />
            </Routes>
          </main>
          <footer>
          </footer>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}
export default App;