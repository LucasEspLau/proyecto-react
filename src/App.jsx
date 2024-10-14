import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Inicio from './pages/inicio';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CrearProducto from './pages/Catalogo/Crear';
import Catalogo from './pages/Catalogo/Catalogo';
import Registro from './pages/Registro/Registro';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
      <>
      <Navbar/>

      <Routes>

        <Route path='/' element={<Inicio/>}/>
        <Route path='/catalogo' element={<Catalogo/>}/>
        <Route path='/crear-producto' element={<CrearProducto/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registrarse' element={<Registro/>}/>


      </Routes>
      <Footer/>

      </>
    </Router>
  );
}
export default App;
