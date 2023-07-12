import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <div className="header">
        <NavBar/>
      </div>
      <div className="container">
        <ItemListContainer greeting={`Bienvenido a mi pre-entrega nº2 de React`}/> 
      </div>
      <ItemCount initial={1} stock={16} onAdd={(quantity) => console.log('Cantidad agregada: ',quantity)}/>
    </div>
  );
}
export default App;