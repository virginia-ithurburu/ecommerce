import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Container/ItemListContainer';
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className='App'>
        <NavBar />
        <ItemListContainer saludar='Holi soy el ItemListContainer, el super catalogo esta en proceso! :D'  />
        <ItemDetailContainer />
    </div>
  )
}

export default App