import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="min-h-[10vh] max-h-[10vh] flex flex-row justify-between items-center bg-white px-6 shadow-md">
            <Link to="/" className="text-2xl font-bold text-black hover:text-blue-700 transition-colors">
                Inicio
            </Link>
            <ul className="flex flex-row gap-6">
                <li>
                    <Link
                        to="/crear-producto"
                        className="text-lg text-blue-500 hover:text-blue-600 transition-colors"
                    >
                        Crear Producto
                    </Link>
                </li>
                <li>
                    <Link
                        to="/catalogo"
                        className="text-lg text-blue-500 hover:text-blue-600 transition-colors"
                    >
                        Catálogo
                    </Link>
                </li>
                <li>
                    <Link
                        to="#contact"
                        className="text-lg text-blue-500 hover:text-blue-600 transition-colors"
                    >
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
