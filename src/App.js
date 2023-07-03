import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={`Bienvenido a mi pre-entrega nº1 de React`}/>
      <br />
      <br />
      <div className="container">
      <Products 
        img="./assets/candelero-blanco.avif"
        title="Candelero Blanco"
        price={9.99}
      />
      <Products 
        img="./assets/candelero-negro.avif"
        title="Candelero Negro"
        price={13.99}
      />
      <Products 
        img="./assets/espejo-cuadrado.avif"
        title="Espejo Cuadrado"
        price={80.99}
      />
      <Products 
        img="./assets/espejo-redondo.avif"
        title="Espejo Redondo"
        price={65.99}
      />
      <Products 
        img="./assets/marco-grande.avif"
        title="Marco Grande"
        price={9.99}
      />
      <Products 
        img="./assets/marco-pequeño.avif"
        title="Marco Pequeño"
        price={7.99}
      />
      <Products 
        img="./assets/planta-colgante.avif"
        title="Planta Colgante"
        price={4.99}
      />
      <Products 
        img="./assets/planta-macetero.avif"
        title="Planta de Macetero"
        price={6.99}
      />
      </div>
    </div>
  );
}
export default App;