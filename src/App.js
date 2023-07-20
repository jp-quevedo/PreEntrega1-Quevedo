import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return(
    <div className="App">
      <BrowserRouter>
        <header className="header">
          <NavBar />
        </header>
        <main className="container">
          <Routes>
            <Route path='/' element={ <ItemListContainer greeting={`Bienvenido a mi pre-entrega nº2 de React`} /> }/>
            <Route path='/category/:categoryId' element={ <ItemListContainer /> }/>
            <Route path='/item/:itemId' element={ <ItemDetailContainer /> }/>
            <Route path='*' element={ <h1>Error: página no encontrada.</h1> } />
          </Routes>
        </main>
        <footer>
        </footer>
      </BrowserRouter>
    </div>
  );
}
export default App;