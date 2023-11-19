//import "./Plantilla.css"
import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/searchbar.css'
import '../../../Maquetado/CSS/nav.css'
import '../../../Maquetado/CSS/home.css'
import '../../../Maquetado/CSS/footer.css'
import '../../../Maquetado/CSS/button.css'
//import SeleccionForm from '../SeleccionForm/SeleccionForm'
import {
  Outlet,
  useNavigate,
  useLoaderData,
  useLocation,
} from 'react-router-dom'
import { useState } from 'react'

const titleMap = [
  { path: '/plantilla/Home', title: 'Home' },
  { path: '/plantilla/searchbar/figu', title: 'Figuritas' },
  { path: '/plantilla/searchbar/jugador', title: 'Jugadores' },
  { path: '/plantilla/searchbar/ptdeventa', title: 'Puntos de Venta' },
  { path: '/plantilla/searchbar/seleccionMenu', title: 'Selecciones' },
]

function Template() {
  const navigate = useNavigate()
  const location = useLocation()

  const getPageTitle = () => {
    const currentTitle = titleMap.find(
      (item) => item.path === location.pathname,
    )
    return currentTitle ? currentTitle.title : 'Home'
  }
  /* const [prueba, setPrueba] = useState("messi") */

  return (
    <>
      <div className="navbar-container">
        <span className="navbar-title">{getPageTitle()}</span>
      </div>

      <Outlet context={[dataBusquedaFigurita]}></Outlet>

      <footer className="footer">
        <span
          id="id_footer"
          className="material-symbols-outlined"
          onClick={() => navigate('/plantilla/Home')}
        >
          home
        </span>
        <span
          id="id_footer"
          className="material-symbols-outlined"
          onClick={() => navigate('/plantilla/searchbar/figu')}
        >
          account_box
        </span>
        <span
          id="id_footer"
          className="material-symbols-outlined"
          onClick={() => navigate('/plantilla/searchbar/jugador')}
        >
          directions_run
        </span>
        <span
          id="id_footer"
          className="material-symbols-outlined"
          onClick={() => navigate('/plantilla/searchbar/ptdeventa')}
        >
          storefront
        </span>
        <span
          id="id_footer"
          className="material-symbols-outlined"
          onClick={() => navigate('/plantilla/searchbar/seleccionMenu')}
        >
          flag
        </span>
        <span
          id="id_footer"
          className="material-symbols-outlined"
          onClick={() => navigate('/')}
        >
          logout
        </span>
      </footer>
    </>
  )
}

export const dataBusquedaFigurita = {
  realizar: () => 'hola',
}

export default Template
