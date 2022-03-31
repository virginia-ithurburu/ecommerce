import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Container/ItemListContainer';
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import PageNotfound from './components/ErrorPage/ErrorPage';
import CartContextProvider from './Context/CartContext'



function App() {
  return (
    <CartContextProvider value={[]}>
    <BrowserRouter>
    <div className='App'>
        <NavBar />
        <Routes>
          <Route 
            path="/"
            element= {
              <ItemListContainer />
            }
          />
          <Route
            path="/category/:id"
            element={
              <ItemListContainer />
            }
          />
          <Route
            path="/detail/:id"
            element={
              <ItemDetailContainer />
            }
          />
          <Route
            path="/category/:detail/detail/:id"
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
    </CartContextProvider>
  )
}

export default App