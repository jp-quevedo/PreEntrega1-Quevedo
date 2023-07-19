import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return(
    <div className="App">
      <header className="header">
        <NavBar />
      </header>
      <main className="container">
        <ItemListContainer greeting={`Bienvenido a mi pre-entrega nº2 de React`} /> 
        <ItemDetailContainer />
      </main>
      <footer>
      </footer>
    </div>
  );
}
export default App;