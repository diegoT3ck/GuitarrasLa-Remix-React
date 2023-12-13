import { Link } from "@remix-run/react"
import Logo from '../../public/img/logo.svg'
import Navegacion from "./navegacion"
const header = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
    <header className="header">
        <div className="contenedor barra">
            <Link to="/">
                <img className="logo" src={Logo} alt="Imagen logo" />
            </Link>
            <Navegacion/>
        </div>
    </header>
  )
}

export default header