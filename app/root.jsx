import { useState, useEffect } from 'react'
import { Meta, Links, Outlet, Scripts, LiveReload, useRouteError, isRouteErrorResponse, Link } from '@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'
export function meta() {
    return (
        [
            {
                charset: 'utf-8',
                title: 'GuitarLa - Remix',
                viewport:'width=device-width, initial-scale=1.0'
            }
        ]
    )
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'preconnect',
            href: "https://fonts.googleapis.com"
        },
        {
            rel: 'preconnect',
            href: "https://fonts.gstatic.com",
            crossOrigin: 'true'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        }
    ]
}

export default function App() {
    const [carrito, setCarrito] = useState([])

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    useEffect(() => {
        const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? [];
        setCarrito(carritoLS);
    }, []);
    

    const agregarCarrito = (guitarra) => {
        if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
            // iterar e identificar el documento duplicado
            const carritoActualizado = carrito.map(guitarraState => {
                if (guitarraState.id === guitarra.id) {
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState
            })
            setCarrito(carritoActualizado)
        } else {
            // Registro nuevo
            setCarrito([...carrito, guitarra])
        }
        
    }
    const actualizarCantidad = guitarra => {
        const carritoActualizado = carrito.map(guitarraState => {
            if (guitarraState.id === guitarra.id) {
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState
        })
        setCarrito(carritoActualizado)
    }
    const eliminarGuitarra = id => {
        const carritoActualizado = carrito.filter((guitarraState) => guitarraState.id !== id);
        carritoActualizado.length === 0 && localStorage.setItem('carrito', '[]');
        setCarrito(carritoActualizado);
        }

    return (
        <Document>
           <Outlet
            context={{
                agregarCarrito,
                carrito,
                actualizarCantidad,
                eliminarGuitarra
            }}
           />
        </Document>
    )
}
// Layout Principal
function Document({children}) {
    return (
        <html lang="en">
        <head>
            <Meta/>
            <Links/>
        </head>
        <body>
            <Header/>
            {children}
            <Footer/>

            <Scripts/>
            <LiveReload/>
        </body>
        </html>
    )
}

export function ErrorBoundary() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
        <Document>
            <p className='error'>
                {error.status} { error.statusText }
            </p>
            <Link className='error-enlace' to='/'>
                Tal vez quieras volver a la pagina principal
            </Link>
        </Document>
        );
  }

}