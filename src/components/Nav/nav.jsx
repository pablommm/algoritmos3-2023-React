//import "./Plantilla.css"
import '../../../Maquetado/CSS/general.css'
import '../../../Maquetado/CSS/searchbar.css'
import '../../../Maquetado/CSS/nav.css'
import '../../../Maquetado/CSS/home.css'
import '../../../Maquetado/CSS/footer.css'
import '../../../Maquetado/CSS/button.css'
//import SeleccionForm from '../SeleccionForm/SeleccionForm'
import { useNavigate } from 'react-router-dom'

function Template( ) {
  const navigate = useNavigate()

  return (
    <> 
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
          onClick={() => navigate('/plantilla/figuritas')}
        >
          account_box
        </span>
        <span
          id="id_footer"
          className="material-symbols-outlined"
          onClick={() => navigate('/plantilla/jugadores')}
        >
          directions_run
        </span>
        <span
          id="id_footer"
          className="material-symbols-outlined"
          onClick={() => navigate('/plantilla/puntosDeVenta')}
        >
          storefront
        </span>
        <span
          id="id_footer"
          className="material-symbols-outlined"
          onClick={() => navigate('/plantilla/selecciones')}
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
