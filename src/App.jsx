import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Container/ItemListContainer';
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import PageNotfound from './components/ErrorPage/ErrorPage';


function App() {
  return (

    <BrowserRouter>
    <div className='App'>
        <NavBar />
        <Routes>
          <Route 
            path="/"
            element= {
              <ItemListContainer saludar='Holi soy el ItemListContainer, el super catalogo esta en proceso! :D'  />
            }
          />
          <Route
            path="/category/:id"
            element={
              <ItemListContainer saludar="Holi soy el ItemListContainer"/>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <ItemDetailContainer />
            }
          />
          <Route
              path="/error"
              element={
                <PageNotfound />
              }  
            />
          <Route
            path="/*"
            element={
              <Navigate to="/error" />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart />
            }
            />

        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App