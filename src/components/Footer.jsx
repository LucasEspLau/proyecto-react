export default function Footer(){
    return(
        <footer style={{minHeight:'10vh',maxHeight:'10vh',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <p>Todos los derechos reservados &copy; 2022</p>
            <div>
                <p>Síguenos en nuestras redes sociales</p>
        
                <ul style={{fontSize:'8px'}}>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li> {/* Enlace a Facebook */}
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li> {/* Enlace a Twitter */}
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li> {/* Enlace a Instagram */}
            
                </ul>
            </div>

        </footer>
    )
}