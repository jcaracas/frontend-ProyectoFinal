import {BrowserRouter,Routes, Route} from 'react-router-dom'
import './App.css';
import './assets/css/perfil.css'
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Login from './pages/Signin';
import Perfil from './pages/Perfil';
import Carritos from "./pages/Carritos";
import Plantas from "./pages/Plantas";
import MisCompras from './pages/MisCompras';
import Registrar from './pages/Registrar';
import Productos from './pages/Productos';
import Success from './pages/Success';
import Context from './context/Context'
import CartContext from "./context/CartContext"
import ProductContext from "./context/ProductContext"
import Publicacion from './pages/Publicacion'

import { useState } from "react"


function App() {
  const [usuario, setUsuario] = useState(null)
  const [data, setData] = useState()
  const sharedState = {data, setData}
  const [products, setProducts] = useState([])
  const productState = {products, setProducts}
  
  

  return (
    <div className="App">
      <ProductContext.Provider value={productState}>
        <CartContext.Provider value={sharedState}>           
          <Context.Provider value={{ usuario, setUsuario }} >
            <BrowserRouter>
              <Header/>
                  <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/Signin" element={<Login />} />
                    <Route path="/Registrar" element={<Registrar />} />
                    <Route path="/Perfil" element={<Perfil />} />  
                    <Route path="/usuario/miscompras" element={<MisCompras />} />   
                    <Route path="/usuario/productos" element={<Productos />} />   
                    <Route path="/usuario/publicacion" element={<Publicacion />} />  
                    <Route path="/Plantas/:id" element={<Plantas />} />
                    <Route path="/Carrito" element={<Carritos />} />
                    <Route path='/Success' element={<Success />} />
                  </Routes>                   
              <Footer />
            </BrowserRouter>
          </Context.Provider> 
        </CartContext.Provider>
      </ProductContext.Provider>     
    </div>
  );
}

export default App;
