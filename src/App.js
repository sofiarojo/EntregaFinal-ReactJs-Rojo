import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../src/components/NavBar/NavBar';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from '../src/components/Cart/Cart';
import Error from './components/Error';
import CartProvider from './context/CartContext';
import { Checkout } from './components/Checkout/Checkout';


function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path={'/'} element= {<ItemListContainer/>}/>
            <Route path={'/category/:id'} element= {<ItemListContainer/>}/>
            <Route path={'/item/:id'} element= {<ItemDetailContainer/>}/>
            <Route path={'/cart'} element={<Cart/>}/>
            <Route path={"/checkout"} element={<Checkout/>}/>
            <Route path={'*'} element={<Error/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
