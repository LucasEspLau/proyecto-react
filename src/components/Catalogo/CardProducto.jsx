export function CardProducto({ producto }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', width: '200px', margin: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>
                {producto.nombre}
            </h2>

            <p style={{ fontSize: '16px', color: '#888', marginBottom: '4px' }}>
                Precio: S/{producto.precio}
            </p>

            <p style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>
                {producto.descripcion}
            </p>

            <p style={{ fontSize: '14px', color: producto.stock > 0 ? '#28a745' : '#dc3545', marginBottom: '8px' }}>
                {producto.stock > 0 ? `Stock: ${producto.stock}` : 'Sin stock'}
            </p>

            <img width={100} src={producto.img} alt={producto.name} style={{ borderRadius: '4px', objectFit: 'cover' }} />
        </div>
    );
}
