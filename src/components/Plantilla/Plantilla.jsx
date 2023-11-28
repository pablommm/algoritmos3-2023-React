import './Plantilla.css'
import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/nav.css'
import '../../../Maquetado/CSS/footer.css'
import '../../../Maquetado/CSS/button.css'
import { Outlet, useNavigate } from 'react-router-dom'

function Plantilla({ titulo }) {
  const navigate = useNavigate()

  return (
    <>
      <div className="navbar-container">
        {<span className="navbar-title"> {titulo} </span>}
      </div>
      <Outlet></Outlet>

      <footer className="footer">
        <span
          id="id_footer"
          className={`material-symbols-outlined hover-click ${
            location.pathname === '/plantilla/Home' ? 'active' : ''
          }`}
          onClick={() => navigate('/plantilla/Home')}
        >
          home
        </span>
        <span
          id="id_footer"
          className={`material-symbols-outlined hover-click ${
            location.pathname === '/plantilla/figuritas' ? 'active' : ''
          }`}
          onClick={() => navigate('/plantilla/figuritas')}
        >
          account_box
        </span>
        <span
          id="id_footer"
          className={`material-symbols-outlined hover-click ${
            location.pathname === '/plantilla/jugadores' ? 'active' : ''
          }`}
          onClick={() => navigate('/plantilla/jugadores')}
        >
          directions_run
        </span>
        <span
          id="id_footer"
          className={`material-symbols-outlined hover-click ${
            location.pathname === '/plantilla/puntosDeVenta' ? 'active' : ''
          }`}
          onClick={() => navigate('/plantilla/puntosDeVenta')}
        >
          storefront
        </span>
        <span
          id="id_footer"
          className={`material-symbols-outlined hover-click ${
            location.pathname === '/plantilla/selecciones' ? 'active' : ''
          }`}
          onClick={() => navigate('/plantilla/selecciones')}
        >
          flag
        </span>
        <span
          id="id_footer"
          className="material-symbols-outlined hover-click"
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

export default Plantilla
