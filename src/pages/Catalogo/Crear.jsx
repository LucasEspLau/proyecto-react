import { useState } from "react";

export default function CrearProducto(){
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        img: '',
        precio: '',
        stock: '',
      });
        // Manejar el cambio en los campos del formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };


        // Crear un nuevo producto
    const handleCreateProduct = () => {
        fetch('https://servidor-qt8f.onrender.com/api/product-create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((newProduct) => {
            setProducts((prev) => [...prev, newProduct]);
            resetForm();
        })
        .catch((error) => console.error('Error al crear el producto:', error));
    };
    return(
        <main style={{minHeight:'80vh'}}>
            <h1 style={{margin:0}}>Crear de Producto</h1>
            <form >
            <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                placeholder="Nombre del producto"
                />
            <input
                type="text"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleInputChange}
                placeholder="Descripción del producto"
                />
            <input
                type="text"
                name="img"
                value={formData.img}
                onChange={handleInputChange}
                placeholder="URL de la imagen"
                />
            <input
                type="number"
                name="precio"
                value={formData.precio}
                onChange={handleInputChange}
                placeholder="Precio del producto"
                />
            <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleInputChange}
                placeholder="Stock del producto"
                />
            <button onClick={handleCreateProduct}>
                Crear Producto
            </button>

            </form>
        </main>
    )
}