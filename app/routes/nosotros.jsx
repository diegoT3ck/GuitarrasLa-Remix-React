import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'
export function meta() {
    return (
        [
            {
                title: 'GuitarLa - Sobre Nosotros',
                description: 'Venta de Guitarras'
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
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}



const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
        <h2 className="heading">Nosotros</h2>
        <div className="contenido">
            <img src={imagen} alt="imagen bre Nosotros" />
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Expedita totam quaerat fugit rerum facilis, magni labore eius, 
                    veniam illum sequi doloribus, repellat ullam possimus magnam impedit
                    rem harum quidem dignissimos.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Expedita totam quaerat fugit rerum facilis, magni labore eius, 
                    veniam illum sequi doloribus, repellat ullam possimus magnam impedit
                    rem harum quidem dignissimos.
                </p>
            </div>
        </div>
    </main>
  )
}

export default Nosotros