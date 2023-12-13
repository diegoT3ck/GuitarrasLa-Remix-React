
import { useLoaderData, useRouteError, isRouteErrorResponse, Link, useOutletContext} from '@remix-run/react'
import { useState, useEffect } from 'react'
import { getGuitarra } from '~/models/guitarras.server'
import styles from '~/styles/guitarras.css'

export async function loader({params}) {
    const { guitarraUrl } = params
    const guitarra = await getGuitarra(guitarraUrl)

    if (guitarra.data.length == 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra no encontrada',
            data: {}
        })
    }
    return guitarra
}
export function ErrorBoundary() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <p className='error'>
                    {error.status} { error.statusText }
                </p>
                <Link 
                    className='error-enlace'
                    to='/guitarras'
                >
                    Tal vez quieras volver a la tienda
                </Link>
            </div>
        );
  }
}

export function meta({data}) {
    if (!data || Object.keys(data).length === 0) { // Verifica si no hay datos o los datos están vacíos
        return [
          { title: 'GuitarLA - Guitarra no encontrada' },
          { descripcion: 'Guitarras, venta de guitarras, guitarra no encontrada' },
        ];
      }
        return [
        {
            title: `GuitarLA - ${data.data[0].attributes.nombre}`,
            descripcion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`
        }
    ]
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}



const Guitarra = () => {
    const [cantidad, setCantidad] = useState(0)
    const [estado, setEstado] = useState(false)
    const guitarra = useLoaderData()
    const {nombre, descripcion, imagen, precio} = guitarra.data[0].attributes
    const {agregarCarrito, carrito} = useOutletContext()
    useEffect( () => {
        const data = carrito.find(item => item.id === guitarra.data[0].id)
        typeof data === 'object' ? setEstado(true) : setEstado(false)

    },  [guitarra, carrito])


    let handleSubmit = e => {
        e.preventDefault()
        if (cantidad < 1) {
            alert('Debes seleccionar una cantidad')
            return
        }

        const guitarraSeleccionada = {
            id: guitarra.data[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }
        agregarCarrito(guitarraSeleccionada)
    }

  return (

    <main >
        {estado && (
         <span className='guitarra-agregada'>
            Este Este producto esta en el carrito
         </span>
        )}
        <span>

        </span>
        <div className='contenedor guitarra'>

            <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />
            <div className='contenido'>
                <h3>{nombre}</h3>
                <p className='texto'>
                    {descripcion}
                </p>

                <p className='precio'>
                    $ {precio}
                </p>

                <form 
                    onSubmit={handleSubmit}
                    className='formulario' 
                >
                    <label htmlFor="cantidad">Cantidad</label>
                    <select 
                        onChange={e => setCantidad(parseInt(e.target.value))}
                        id='cantidad'>
                        <option value="0">--Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <input 
                        type="submit" 
                        value={!estado ? `Agregar al carito` : 'Actualizar Cantidad'}
                    />
                </form>
            </div>
        </div>
    </main>
  )
}

export default Guitarra