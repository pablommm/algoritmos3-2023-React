import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/searchbar.css'
import '../../../Maquetado/CSS/home.css'
import '../../../Maquetado/CSS/footer.css'
import '../../../Maquetado/CSS/button.css'
import '../../../Maquetado/CSS/nav.css'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <>
      <footer className="footer">
        <NavLink
          to="/plantilla/Home"
          activaclassname="selectedRoute"
          id="id_footer"
          className="material-symbols-outlined"
        >
          home
        </NavLink>

        <NavLink
          to="/plantilla/figuritas"
          activaclassname="selectedRoute"
          id="id_footer"
          className="material-symbols-outlined hover-click"
        >
          account_box
        </NavLink>

        <NavLink
          to="/plantilla/jugadores"
          activaclassname="selectedRoute"
          id="id_footer"
          className="material-symbols-outlined"
        >
          directions_run
        </NavLink>

        <NavLink
          to="/plantilla/puntosDeVenta"
          activaclassname="selectedRoute"
          id="id_footer"
          className="material-symbols-outlined"
        >
          storefront
        </NavLink>

        <NavLink
          to="/plantilla/selecciones"
          activaclassname="selectedRoute"
          id="id_footer"
          className="material-symbols-outlined"
        >
          flag
        </NavLink>

        <NavLink
          to="/"
          activaclassname="selectedRoute"
          id="id_footer"
          className="material-symbols-outlined"
        >
          logout
        </NavLink>
      </footer>
    </>
  )
}

export default Nav
