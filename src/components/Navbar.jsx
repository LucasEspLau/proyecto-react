import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav style={{minHeight:'10vh',maxHeight:'10vh',
        display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Link to="/">Inicio</Link>
            <ul style={{display:'flex',flexDirection:'row'}}>
                <li><Link to="/crear-producto">Crear Producto</Link></li>
                <li><Link to="/catalogo">Catálogo</Link></li>
                <li><Link to="#contact">Contacto</Link></li>
            </ul>
        </nav>
    )
}