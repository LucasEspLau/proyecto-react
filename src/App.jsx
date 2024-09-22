import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Inicio from './pages/inicio';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CrearProducto from './pages/Catalogo/Crear';
import Catalogo from './pages/Catalogo/Catalogo';

function App() {
  return (
    <Router>
      <>
      <Navbar/>

      <Routes>

        <Route path='/' element={<Inicio/>}/>
        <Route path='/catalogo' element={<Catalogo/>}/>
        <Route path='/crear-producto' element={<CrearProducto/>}/>

      </Routes>
      <Footer/>

      </>
      {/*
      <div className="App">
        <Navbar />
      
      <header className='header'>
        <h1>Bienvenido a ALfresco</h1>
        <p>Descubre el maravillo mundo de los útiles</p>
      </header>
      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
      </Routes>

      <Footer />
      </div>*/}
    </Router>
  );
}
export default App;
