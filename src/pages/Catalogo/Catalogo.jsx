import { useEffect, useState } from "react";
import { CardProducto } from "../../components/Catalogo/CardProducto";

const listaProductos = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 100,
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 200,
  },
  {
    id: 3,
    nombre: "Producto 1",
    precio: 100,
  },
  {
    id: 4,
    nombre: "Producto 2",
    precio: 200,
  },
];

export default function Catalogo() {
  const [productos, setProductos] = useState(listaProductos);
  const [columnas, setColumnas] = useState('repeat(1, 1fr)');

  // Función que calcula el número de columnas en base al tamaño de la ventana
  const calcularColumnas = () => {
    const ancho = window.innerWidth;
    if (ancho >= 1024) {
      setColumnas('repeat(3, 1fr)');
    } else if (ancho >= 768) {
      setColumnas('repeat(2, 1fr)');
    } else {
      setColumnas('repeat(1, 1fr)');
    }
  };

  // Escuchar cambios en el tamaño de la ventana
  useEffect(() => {
    calcularColumnas(); // Calcular columnas cuando se monta el componente
    window.addEventListener('resize', calcularColumnas); // Escuchar el evento 'resize'

    return () => {
      window.removeEventListener('resize', calcularColumnas); // Limpiar listener al desmontar
    };
  }, []);

  const getProductos=()=>{
    fetch("https://servidor-qt8f.onrender.com/api/products")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al cargar productos:", error));
  }
  // Fetch de productos cuando se monta el componente
  useEffect(() => {
    getProductos()
  }, []);


  
  function actualizarLista(productId){
    setProductos((prev) => prev.filter((prod) => prod.id !== productId));
  }

  return (
    <main style={{ minHeight: "80vh", padding: "20px" }}>
      <h1 style={{ margin: "0 0 20px 0", textAlign: "center" }}>
        Catálogo de Productos
      </h1>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {productos.map((producto) => (
          <CardProducto key={producto.id} producto={producto} actualizarLista={actualizarLista} obtenerProductos={getProductos}/>
        ))}
      </div>
    </main>
  );
}
