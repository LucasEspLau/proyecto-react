import { useEffect, useState } from "react"
import { CardProducto } from "../../components/Catalogo/CardProducto"

const listaProductos=[{
    id:1,
    nombre:"Producto 1",
    precio:100
},
{
    id:2,
    nombre:"Producto 2",
    precio:200
},
{
    id:3,
    nombre:"Producto 1",
    precio:100
},
{
    id:4,
    nombre:"Producto 2",
    precio:200
},
]

export default function Catalogo(){
    const [productos,setProductos]=useState(listaProductos)


    useEffect(()=>{
        fetch('https://servidor-qt8f.onrender.com/api/products')
        .then(response=>response.json())
        .then(data=>setProductos(data))
    },[])
    return(
        <main style={{minHeight:'80vh'}}>
            <h1 style={{margin:0}}>Catálogo de Productos</h1>
            <div style={{display:'flex'}}>
                {productos.map((producto)=>(
                    <CardProducto key={producto.id} producto={producto}/>
                ))}
            </div>

        </main>
    )
}
