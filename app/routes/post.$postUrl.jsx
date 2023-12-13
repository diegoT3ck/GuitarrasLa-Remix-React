import { useLoaderData, useRouteError, isRouteErrorResponse, Link} from '@remix-run/react'
import { getPost } from "../models/posts.server"
import { formatearFecha } from "~/utils/helpers"
import styes from '~/styles/blog.css'

export async function loader({params}) {
    const { postUrl } = params
    const post = await getPost(postUrl)
    if (post.data.length == 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Entrada no encontrada',
            data: {}
        })
    }
    return post
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
                    to='/blog'
                >
                    Tal vez quieras volver al Blog
                </Link>
            </div>
        );
  }
}
export function meta({data}) {
    if (!data || Object.keys(data).length === 0) { // Verifica si no hay datos o los datos están vacíos
        return [
          { title: 'GuitarLA - Post no encontrado' },
          { descripcion: 'Guitarras, Blog , post no encontrada' },
        ];
      }
        return [
        {
            title: `GuitarLA - ${data.data[0].attributes.titulo}`,
            descripcion: `Guitarras, Blog de musica, guitarra ${data.data[0].attributes.titulo}`
        }
    ]
}
export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styes
        }
    ]
}

const Post = () => {
    const post = useLoaderData()
    // console.log(post.data[0].attributes)
    // eslint-disable-next-line no-unsafe-optional-chaining
    const {titulo, contenido, imagen, publishedAt } = post?.data[0].attributes
  return (
    <article className='contenedor post'>
        <img className='imagen mt-3' src={ imagen?.data?.attributes.url} alt={`Imagen ${titulo}`} />
            <div className='contenido'>
                <h3> {titulo} </h3>
                <p className='fecha'> {formatearFecha(publishedAt)} </p>
                <p className='texto'> { contenido } </p>

            </div>
    </article>
  )
}

export default Post