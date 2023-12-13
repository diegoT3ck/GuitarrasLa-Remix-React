import { useEffect, useState } from 'react'
import styles from '~/styles/carrito.css'
import { useOutletContext } from '@remix-run/react'
export function links() {
    return [
        {
            rel:'stylesheet',
            href: styles
        }
    ]
}

export function meta() {
    return [
        {
            title: 'GuitarLA - Carrito de compras',
            description: 'Venta de guitarras, musica, blog, carrito de compras.'
        }
    ]
}

const Carrito = () => {
    const [total, setTotal] = useState(0)
    const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext()
    useEffect( () => {
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0 )
        setTotal(calculoTotal)
    }, [carrito])

    
  return (
    <main className="contenedor">
        <h1 className="heading">Carrito de compras</h1>
        <div className="contenido">
            <div className='carrito'>
                <h2>Articulos</h2>
                {carrito?.length === 0 ? 'Carrito Vacio' : (
                    carrito?.map(producto => (
                        <div key={producto.id} className='producto'>
                            <div>
                                <img src={producto.imagen} alt={`Producto ${producto.nombre}`} />
                            </div>
                            <div>
                                <p className='nombre'> {producto.nombre}</p>
                                <p>Cantidad</p>
                                <select 
                                    value={producto.cantidad}
                                    className='select'
                                    onChange={e => actualizarCantidad({
                                        cantidad:parseInt(e.target.value),
                                        id: producto.id
                                    })}
                                    id='cantidad'>
                                    <option value="0">--Seleccione --</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>

                                <p className='precio'>$ <span>{producto.precio}</span> </p>
                                <p className='subtotal'>Subtotal $ <span>{producto.cantidad * producto.precio}</span> </p>
                            </div>
                        <button type='button' className='btn_eliminar'
                        onClick={() => eliminarGuitarra(producto.id)}
                        >X</button>
                        </div>
                    ))
                )}
            </div>
            <aside className="resumen">
                <h1>Resumen del Pedido</h1>
                <p>Total a pagar $ {total}</p>
            </aside>
        </div>
    </main>
  )
}

export default Carrito