import { Link } from "@remix-run/react"
import { formatearFecha } from "~/utils/helpers"

const Post = ({post}) => {
    const { titulo, contenido, url, createdAt, imagen} = post
  return (
    <article className="post">
        <img 
            
            src={imagen.data.attributes.formats.small.url} 
            alt={`Imagen ${titulo}`} />
            <div className="contenido">
                <h3> {titulo} </h3>
                <p className="fecha">{ formatearFecha(createdAt)}</p>
                <p className="resumen"> {contenido} </p>
                <Link className="enlace" to={`/post/${url}`}>
                    Leer Post
                </Link>
            </div>

    </article>
  )
}

export default Post