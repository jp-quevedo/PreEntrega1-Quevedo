import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header className="header">
        <NavBar />
      </header>
      <main className="container">
        <ItemListContainer greeting={`Bienvenido a mi pre-entrega nº2 de React`} /> 
        <ItemDetailContainer />
      </main>
      <footer>
        <ItemCount initial={1} stock={16} onAdd={(quantity) => console.log('Cantidad agregada: ',quantity)} />
      </footer>
    </div>
  );
}
export default App;